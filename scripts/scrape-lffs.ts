import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

// ===== Configuration =====
const CLUB_ID = 1466;
const SEASON_ID = 9;
const ORGANIZATION_ID = 1;
const LFFS_BASE_URL = 'https://www.lffs.eu';
const DATA_DIR = path.resolve(__dirname, '../data');

// Our team name fragments for matching
const OUR_CLUB_NAMES = [
  'atletico laeken',
  'atletico bxl',
  'atletico bruxelles',
];

// ===== Types =====
interface Match {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  journee: number;
  serieId: number;
  serieName: string;
  status: 'played' | 'upcoming';
}

interface ClassementEntry {
  position: number;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  isOurClub?: boolean;
}

interface SerieInfo {
  serieId: number;
  serieName: string;
  competitionId: number;
}

// ===== Helpers =====
function log(msg: string): void {
  const timestamp = new Date().toISOString().slice(11, 19);
  console.log(`[${timestamp}] ${msg}`);
}

function isOurTeam(name: string): boolean {
  const normalized = name.toLowerCase().trim();
  return OUR_CLUB_NAMES.some((n) => normalized.includes(n));
}

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    log(`Created data directory: ${DATA_DIR}`);
  }
}

function readExistingJson<T>(filePath: string): T | null {
  try {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(raw) as T;
    }
  } catch (err) {
    log(`Warning: could not read ${filePath}: ${err}`);
  }
  return null;
}

function writeJson(filePath: string, data: unknown): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  log(`Saved: ${path.basename(filePath)}`);
}

async function waitForNetworkIdle(page: Page, timeout = 5000): Promise<void> {
  try {
    await page.waitForLoadState('networkidle', { timeout });
  } catch {
    // Ignore timeout — page might still be usable
  }
}

// ===== Scrape series for our club =====
async function scrapeClubSeries(page: Page): Promise<SerieInfo[]> {
  log(`Navigating to club page for club_id=${CLUB_ID}...`);

  const url = `${LFFS_BASE_URL}/club/${CLUB_ID}`;

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await waitForNetworkIdle(page, 6000);
  } catch (err) {
    log(`Warning: could not load club page: ${err}`);
    return [];
  }

  const series: SerieInfo[] = [];

  try {
    // Try to find competition/series links on the club page
    const links = await page.$$eval('a[href*="/series/"], a[href*="/competition/"]', (els) =>
      els.map((el) => ({
        href: (el as HTMLAnchorElement).href,
        text: el.textContent?.trim() ?? '',
      }))
    );

    for (const link of links) {
      // Extract serieId from URLs like /competition/series/1226
      const serieMatch = link.href.match(/\/series\/(\d+)/);
      const compMatch = link.href.match(/\/competition\/(\d+)/);

      if (serieMatch) {
        const serieId = parseInt(serieMatch[1], 10);
        if (!series.some((s) => s.serieId === serieId)) {
          series.push({
            serieId,
            serieName: link.text || `Série ${serieId}`,
            competitionId: compMatch ? parseInt(compMatch[1], 10) : 91,
          });
        }
      }
    }
  } catch (err) {
    log(`Could not extract series links: ${err}`);
  }

  if (series.length === 0) {
    log('No series found via club page. Using known series from equipes.json...');
    // Fall back to known series IDs from equipes.json
    try {
      const equipesPath = path.join(DATA_DIR, 'equipes.json');
      const equipes = readExistingJson<Array<{ serieId: number; competitionId: number; division: string }>>(equipesPath);
      if (equipes) {
        for (const eq of equipes) {
          series.push({
            serieId: eq.serieId,
            serieName: eq.division,
            competitionId: eq.competitionId,
          });
        }
      }
    } catch {
      // Use hardcoded fallback
      series.push(
        { serieId: 1226, serieName: 'Provinciale 1 Bruxelles-Brabant Wallon', competitionId: 91 },
        { serieId: 1227, serieName: 'Provinciale 2 Bruxelles-Brabant Wallon', competitionId: 91 },
        { serieId: 1228, serieName: 'Vétérans Bruxelles-Brabant Wallon', competitionId: 91 }
      );
    }
  }

  log(`Found ${series.length} series: ${series.map((s) => s.serieId).join(', ')}`);
  return series;
}

// ===== Scrape standings (classement) for a series =====
async function scrapeClassement(
  page: Page,
  serie: SerieInfo
): Promise<ClassementEntry[] | null> {
  const url = `${LFFS_BASE_URL}/competition/series/${serie.serieId}`;
  log(`Scraping classement for serie ${serie.serieId} (${serie.serieName})...`);

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await waitForNetworkIdle(page, 8000);
  } catch (err) {
    log(`Error navigating to ${url}: ${err}`);
    return null;
  }

  const classement: ClassementEntry[] = [];

  try {
    // Try to find the standings table
    // LFFS typically renders a table with class containing 'classement' or 'ranking'
    const tableExists = await page.$('table');
    if (!tableExists) {
      log(`No table found on ${url}`);
      return null;
    }

    const rows = await page.$$eval(
      'table tbody tr',
      (trs, ourClubNames) => {
        return trs.map((tr, index) => {
          const cells = Array.from(tr.querySelectorAll('td, th'));
          const texts = cells.map((c) => c.textContent?.trim() ?? '');

          const teamName = texts[1] ?? texts[0] ?? '';
          const normalized = teamName.toLowerCase();
          const isOurClub = ourClubNames.some((n: string) => normalized.includes(n));

          return {
            raw: texts,
            index,
            teamName,
            isOurClub,
          };
        });
      },
      OUR_CLUB_NAMES
    );

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const r = row.raw;

      if (r.length < 5) continue;

      // Try to parse columns: pos, team, played, won, drawn, lost, goalsFor, goalsAgainst, points
      // Column order may vary — try common patterns
      let pos = parseInt(r[0], 10);
      if (isNaN(pos)) pos = i + 1;

      const teamName = r[1] || r[0] || `Équipe ${i + 1}`;

      // Find numeric columns
      const nums = r.slice(2).map((v) => parseInt(v, 10));
      const validNums = nums.filter((n) => !isNaN(n));

      if (validNums.length < 4) continue;

      const played = validNums[0] ?? 0;
      const won = validNums[1] ?? 0;
      const drawn = validNums[2] ?? 0;
      const lost = validNums[3] ?? 0;
      const goalsFor = validNums[4] ?? 0;
      const goalsAgainst = validNums[5] ?? 0;
      const points = validNums[validNums.length - 1] ?? won * 3 + drawn;

      classement.push({
        position: pos,
        teamName: teamName.replace(/\s+/g, ' ').trim(),
        played,
        won,
        drawn,
        lost,
        goalsFor,
        goalsAgainst,
        points,
        isOurClub: row.isOurClub,
      });
    }
  } catch (err) {
    log(`Error parsing classement table: ${err}`);
    return null;
  }

  if (classement.length === 0) {
    log(`No classement data extracted for serie ${serie.serieId}`);
    return null;
  }

  log(`Extracted ${classement.length} teams in classement for serie ${serie.serieId}`);
  return classement;
}

// ===== Scrape match results for a series =====
async function scrapeMatches(
  page: Page,
  serie: SerieInfo
): Promise<Match[]> {
  const url = `${LFFS_BASE_URL}/competition/series/${serie.serieId}/results`;
  log(`Scraping matches for serie ${serie.serieId}...`);

  const matches: Match[] = [];

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await waitForNetworkIdle(page, 8000);
  } catch {
    // Try alternate URL pattern
    try {
      const altUrl = `${LFFS_BASE_URL}/competition/series/${serie.serieId}`;
      await page.goto(altUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await waitForNetworkIdle(page, 6000);
    } catch (err2) {
      log(`Could not load matches page for serie ${serie.serieId}: ${err2}`);
      return matches;
    }
  }

  try {
    // Try to find match rows
    // LFFS match rows typically contain date, home team, score, away team
    const matchRows = await page.$$eval(
      '.match-row, .result-row, tr[data-match-id], .match, .fixture',
      (els) =>
        els.map((el) => ({
          text: el.textContent?.trim() ?? '',
          html: el.innerHTML,
          dataset: (el as HTMLElement).dataset,
        }))
    );

    if (matchRows.length === 0) {
      // Fallback: try table rows
      const tableRows = await page.$$eval('table tbody tr', (trs) =>
        trs.map((tr) => {
          const cells = Array.from(tr.querySelectorAll('td'));
          return cells.map((c) => c.textContent?.trim() ?? '');
        })
      );

      let matchIndex = 0;
      for (const cells of tableRows) {
        if (cells.length < 4) continue;

        // Heuristic: look for date pattern, team names, and score
        const datePattern = /\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}/;
        const hasDate = cells.some((c) => datePattern.test(c));
        const scorePattern = /^\d+\s*[-–]\s*\d+$|^\d+$/;

        if (!hasDate && !cells.some((c) => scorePattern.test(c.trim()))) continue;

        // Try to find our team in the row
        const rowText = cells.join(' ').toLowerCase();
        if (!OUR_CLUB_NAMES.some((n) => rowText.includes(n))) continue;

        // Extract what we can
        const dateStr = cells.find((c) => datePattern.test(c)) ?? '';
        const scoreStr = cells.find((c) => /^\d+\s*[-–]\s*\d+$/.test(c.trim())) ?? null;

        let homeScore: number | null = null;
        let awayScore: number | null = null;
        let status: 'played' | 'upcoming' = 'upcoming';

        if (scoreStr) {
          const parts = scoreStr.split(/[-–]/).map((s) => parseInt(s.trim(), 10));
          if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            homeScore = parts[0];
            awayScore = parts[1];
            status = 'played';
          }
        }

        // Parse date
        let dateISO = new Date().toISOString().slice(0, 10);
        const dateMatch = dateStr.match(/(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2,4})/);
        if (dateMatch) {
          const day = parseInt(dateMatch[1], 10);
          const month = parseInt(dateMatch[2], 10);
          let year = parseInt(dateMatch[3], 10);
          if (year < 100) year += 2000;
          dateISO = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }

        matches.push({
          id: `${serie.serieId}-${matchIndex++}`,
          date: dateISO,
          homeTeam: cells[1] ?? 'Équipe A',
          awayTeam: cells[3] ?? 'Équipe B',
          homeScore,
          awayScore,
          journee: matchIndex,
          serieId: serie.serieId,
          serieName: serie.serieName,
          status,
        });
      }
    }
  } catch (err) {
    log(`Error parsing matches for serie ${serie.serieId}: ${err}`);
  }

  // Filter to only matches involving our club
  const ourMatches = matches.filter(
    (m) => isOurTeam(m.homeTeam) || isOurTeam(m.awayTeam)
  );

  log(`Found ${ourMatches.length} matches for our club in serie ${serie.serieId}`);
  return ourMatches;
}

// ===== Main =====
async function main(): Promise<void> {
  log('===== LFFS Scraper — Atletico Laeken =====');
  log(`Club ID: ${CLUB_ID} | Season: ${SEASON_ID} | Org: ${ORGANIZATION_ID}`);
  log(`Data directory: ${DATA_DIR}`);

  ensureDataDir();

  let browser: Browser | null = null;
  let hasChanges = false;

  try {
    log('Launching Chromium browser...');
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const context = await browser.newContext({
      userAgent:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      locale: 'fr-BE',
      timezoneId: 'Europe/Brussels',
      viewport: { width: 1280, height: 800 },
    });

    const page = await context.newPage();

    // Intercept and block unnecessary resources to speed up scraping
    await page.route('**/*.{png,jpg,jpeg,gif,svg,woff,woff2,ttf,eot}', (route) =>
      route.abort()
    );

    // Step 1: Get series for our club
    const series = await scrapeClubSeries(page);

    if (series.length === 0) {
      log('ERROR: No series found for our club. Keeping existing data.');
      return;
    }

    // Step 2: For each series, scrape classement and matches
    const allMatches: Match[] = [];

    for (const serie of series) {
      log(`\n--- Processing serie: ${serie.serieName} (${serie.serieId}) ---`);

      // Scrape classement
      const classement = await scrapeClassement(page, serie);
      if (classement && classement.length > 0) {
        const classementFile = path.join(DATA_DIR, `classement-${serie.serieId}.json`);
        const existing = readExistingJson<{ classement: ClassementEntry[] }>(classementFile);
        const existingJson = JSON.stringify(existing?.classement ?? []);
        const newJson = JSON.stringify(classement);

        if (existingJson !== newJson) {
          writeJson(classementFile, {
            lastUpdated: new Date().toISOString(),
            serieId: serie.serieId,
            serieName: serie.serieName,
            classement,
          });
          hasChanges = true;
        } else {
          log(`Classement for serie ${serie.serieId} unchanged, skipping write.`);
        }
      } else {
        log(`No classement data for serie ${serie.serieId}, keeping existing.`);
      }

      // Scrape matches
      const serieMatches = await scrapeMatches(page, serie);
      allMatches.push(...serieMatches);

      // Small delay to be polite
      await page.waitForTimeout(1500);
    }

    // Step 3: Save all matches
    if (allMatches.length > 0) {
      const resultatsFile = path.join(DATA_DIR, `resultats-${CLUB_ID}.json`);
      const existing = readExistingJson<{ matches: Match[] }>(resultatsFile);
      const existingJson = JSON.stringify(existing?.matches ?? []);
      const newJson = JSON.stringify(allMatches);

      if (existingJson !== newJson) {
        writeJson(resultatsFile, {
          lastUpdated: new Date().toISOString(),
          clubId: CLUB_ID,
          matches: allMatches,
        });
        hasChanges = true;
      } else {
        log('Match results unchanged, skipping write.');
      }
    } else {
      log('No match data scraped. Keeping existing resultats file.');
    }

    log('\n===== Scraping completed =====');
    log(`Changes detected: ${hasChanges ? 'YES' : 'NO'}`);
  } catch (err) {
    log(`FATAL ERROR: ${err}`);
    log('Keeping all existing data files intact.');
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      log('Browser closed.');
    }
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
