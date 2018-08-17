/**
 * HELPER TYPES
 */

type SongId = string;

export enum Difficulty {
    Easy = 'Easy',
    Normal = 'Normal',
    Hard = 'Hard',
    Expert = 'Expert',
    ExpertPlus = 'ExpertPlus',
}

const DIFFICULTY_KEYS = Object.keys(Difficulty);

/**
 * Given two difficulties, returns a positive number if the first is
 * more difficult than the second, a negative number if the second is
 * more difficult than the first, and 0 if they are the same.
 */
export const CompareDifficulties = (a: Difficulty, b: Difficulty): number  => {
    return DIFFICULTY_KEYS.indexOf(a) - DIFFICULTY_KEYS.indexOf(b);
}

export type DifficultyMap<T> = {
    [key in Difficulty]?: T;
}

export interface BeatSaberData {
    songs: {[songId: string]: Song};
    players: {[playerName: string]: Player};
}

/**
 * SONG INTERFACES
 */

export interface Song {
    id: SongId;
    title: string;
    artist: string;
    author: string;
    bpm: number;
    mode: string;
    mostRecentScore?: SongScore;
    detailsByDifficulty: DifficultyMap<SongDetails>;
}

export interface SongDetails {
    summary: SongSummary;
    difficulty: Difficulty;
    scores: SongScore[];
}

export interface SongSummary {
    topPlayer?: string;
    topPlayerFullCombo: boolean;
    players: string[];
}

export interface SongScore {
    score: number;
    playerName: string;
    fullCombo: boolean;
    timestamp: number;
}

/**
 * PLAYER INTERFACES
 */

export interface PlayerDetails {
    difficulty: Difficulty;
    songsPlayed: SongId[];
    firstPlaces: SongId[];
}

export interface Player {
    name: string;
    fullCombos: PlayerScore[];
    detailsByDifficulty: DifficultyMap<PlayerDetails>;
    topScores: {[songId: string]: PlayerScore};
}

export interface PlayerScore {
    songId: string;
    difficulty: Difficulty;
    score: number;
    time: number;
    rank: number;
    rankOf: number;
    fullCombo: boolean;
}
