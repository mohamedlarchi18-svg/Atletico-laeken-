export const COLORS = {
  rouge: '#C8102E',
  blanc: '#FFFFFF',
  noir: '#0A0A0A',
  offWhite: '#FAF8F5',
  creme: '#F0EBE4',
} as const;

export const CLUB_ID = 1466;
export const SEASON_ID = 9;
export const ORGANIZATION_ID = 1;

export const CLUB_NAME = 'Atletico Laeken';
export const CLUB_SHORT_NAME = 'ATL';
export const CLUB_FOUNDED = 2018;

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/resultats', label: 'Résultats' },
  { href: '/equipes', label: 'Équipes' },
  { href: '/vie-du-club', label: 'Vie du Club' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/atleticolaeken',
  instagram: 'https://www.instagram.com/atleticolaeken',
} as const;

export const LFFS_BASE_URL = 'https://www.lffs.eu';
