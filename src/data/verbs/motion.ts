import type { VerbCard } from '../../types';

export const motionVerbs: VerbCard[] = [
  {
    id: 'v4',
    german: 'gehen',
    english: 'to go',
    category: 'Motion',
    present: 'ich gehe',
    past: 'ich ging',
    perfect: 'ich bin gegangen',
    isRegular: false,
    example: 'Ich gehe zur Schule.'
  },
  {
    id: 'v5',
    german: 'kommen',
    english: 'to come',
    category: 'Motion',
    present: 'ich komme',
    past: 'ich kam',
    perfect: 'ich bin gekommen',
    isRegular: false,
    example: 'Ich komme aus Deutschland.'
  },
  {
    id: 'v6',
    german: 'fahren',
    english: 'to drive/ride',
    category: 'Motion',
    present: 'ich fahre',
    past: 'ich fuhr',
    perfect: 'ich bin gefahren',
    isRegular: false,
    example: 'Ich fahre mit dem Auto.'
  }
];