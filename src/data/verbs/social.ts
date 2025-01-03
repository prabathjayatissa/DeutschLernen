import type { VerbCard } from '../../types';

export const socialVerbs: VerbCard[] = [
  {
    id: 'v19',
    german: 'treffen',
    english: 'to meet',
    category: 'Social',
    present: 'ich treffe',
    past: 'ich traf',
    perfect: 'ich habe getroffen',
    isRegular: false,
    example: 'Ich treffe meine Freunde.'
  },
  {
    id: 'v20',
    german: 'helfen',
    english: 'to help',
    category: 'Social',
    present: 'ich helfe',
    past: 'ich half',
    perfect: 'ich habe geholfen',
    isRegular: false,
    example: 'Ich helfe dir gerne.'
  },
  {
    id: 'v21',
    german: 'spielen',
    english: 'to play',
    category: 'Social',
    present: 'ich spiele',
    past: 'ich spielte',
    perfect: 'ich habe gespielt',
    isRegular: true,
    example: 'Ich spiele Fußball.'
  }
];