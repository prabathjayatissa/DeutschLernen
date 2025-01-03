import type { VerbCard } from '../../types';

export const emotionVerbs: VerbCard[] = [
  {
    id: 'v16',
    german: 'lieben',
    english: 'to love',
    category: 'Emotions',
    present: 'ich liebe',
    past: 'ich liebte',
    perfect: 'ich habe geliebt',
    isRegular: true,
    example: 'Ich liebe meine Familie.'
  },
  {
    id: 'v17',
    german: 'mögen',
    english: 'to like',
    category: 'Emotions',
    present: 'ich mag',
    past: 'ich mochte',
    perfect: 'ich habe gemocht',
    isRegular: false,
    example: 'Ich mag Schokolade.'
  },
  {
    id: 'v18',
    german: 'fühlen',
    english: 'to feel',
    category: 'Emotions',
    present: 'ich fühle',
    past: 'ich fühlte',
    perfect: 'ich habe gefühlt',
    isRegular: true,
    example: 'Ich fühle mich gut.'
  }
];