import clsx, { type ClassValue } from 'clsx';
import type { Match, MatchResult } from './types';

/**
 * Utility to merge Tailwind CSS classes conditionally.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format a date string to French locale format.
 */
export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('fr-BE', options ?? defaultOptions);
}

/**
 * Format a date to short format (e.g., "14 jan. 2024")
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-BE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Determine match result for our club team.
 * Returns 'win', 'loss', 'draw', or 'upcoming'.
 */
export function getMatchResult(match: Match): MatchResult {
  if (match.status === 'upcoming' || match.homeScore === null || match.awayScore === null) {
    return 'upcoming';
  }

  const isHome = isOurTeam(match.homeTeam);
  const isAway = isOurTeam(match.awayTeam);

  if (!isHome && !isAway) return 'upcoming';

  const homeScore = match.homeScore;
  const awayScore = match.awayScore;

  if (homeScore === awayScore) return 'draw';

  if (isHome) {
    return homeScore > awayScore ? 'win' : 'loss';
  } else {
    return awayScore > homeScore ? 'win' : 'loss';
  }
}

/**
 * Check if a team name belongs to Atletico Laeken.
 */
export function isOurTeam(teamName: string): boolean {
  const normalized = teamName.toLowerCase();
  return (
    normalized.includes('atletico laeken') ||
    normalized.includes('atletico bxl') ||
    normalized.includes('atletico bruxelles')
  );
}

/**
 * Get CSS classes for result badge.
 */
export function getResultBadgeClass(result: MatchResult): string {
  switch (result) {
    case 'win':
      return 'badge-win';
    case 'loss':
      return 'badge-loss';
    case 'draw':
      return 'badge-draw';
    case 'upcoming':
      return 'badge-upcoming';
  }
}

/**
 * Get result label in French.
 */
export function getResultLabel(result: MatchResult): string {
  switch (result) {
    case 'win':
      return 'Victoire';
    case 'loss':
      return 'Défaite';
    case 'draw':
      return 'Nul';
    case 'upcoming':
      return 'À venir';
  }
}

/**
 * Get border color class for match card based on result.
 */
export function getResultBorderClass(result: MatchResult): string {
  switch (result) {
    case 'win':
      return 'border-l-green-500';
    case 'loss':
      return 'border-l-red-500';
    case 'draw':
      return 'border-l-yellow-500';
    case 'upcoming':
      return 'border-l-gray-300';
  }
}

/**
 * Calculate goal difference.
 */
export function goalDifference(goalsFor: number, goalsAgainst: number): string {
  const diff = goalsFor - goalsAgainst;
  if (diff > 0) return `+${diff}`;
  return `${diff}`;
}
