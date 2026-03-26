export interface Match {
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

export interface ClassementEntry {
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

export interface Team {
  id: string;
  name: string;
  division: string;
  coach: string;
  players: number;
  emoji: string;
  serieId: number;
  competitionId: number;
  color: string;
}

export interface ClubInfo {
  name: string;
  shortName: string;
  founded: number;
  address: string;
  city: string;
  postalCode: string;
  email: string;
  phone: string;
  facebook: string;
  instagram: string;
  clubId: number;
}

export type MatchResult = 'win' | 'loss' | 'draw' | 'upcoming';

export interface ContactFormData {
  nom: string;
  email: string;
  telephone?: string;
  message: string;
}
