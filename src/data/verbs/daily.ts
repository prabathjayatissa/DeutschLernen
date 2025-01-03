import type { VerbCard } from '../../types';

export const dailyVerbs: VerbCard[] = [
  {
    id: 'v7',
    german: 'essen',
    english: 'to eat',
    category: 'Daily Activities',
    present: 'ich esse',
    past: 'ich aß',
    perfect: 'ich habe gegessen',
    isRegular: false,
    example: 'Ich esse gerne Pizza.'
  },
  {
    id: 'v8',
    german: 'schlafen',
    english: 'to sleep',
    category: 'Daily Activities',
    present: 'ich schlafe',
    past: 'ich schlief',
    perfect: 'ich habe geschlafen',
    isRegular: false,
    example: 'Ich schlafe acht Stunden.'
  },
  {
    id: 'v9',
    german: 'arbeiten',
    english: 'to work',
    category: 'Daily Activities',
    present: 'ich arbeite',
    past: 'ich arbeitete',
    perfect: 'ich habe gearbeitet',
    isRegular: true,
    example: 'Ich arbeite von zu Hause.'
  }
];