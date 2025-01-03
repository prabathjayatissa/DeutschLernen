import type { VerbCard } from '../../types';

export const communicationVerbs: VerbCard[] = [
  {
    id: 'v10',
    german: 'sprechen',
    english: 'to speak',
    category: 'Communication',
    present: 'ich spreche',
    past: 'ich sprach',
    perfect: 'ich habe gesprochen',
    isRegular: false,
    example: 'Ich spreche Deutsch.'
  },
  {
    id: 'v11',
    german: 'sagen',
    english: 'to say',
    category: 'Communication',
    present: 'ich sage',
    past: 'ich sagte',
    perfect: 'ich habe gesagt',
    isRegular: true,
    example: 'Ich sage die Wahrheit.'
  },
  {
    id: 'v12',
    german: 'fragen',
    english: 'to ask',
    category: 'Communication',
    present: 'ich frage',
    past: 'ich fragte',
    perfect: 'ich habe gefragt',
    isRegular: true,
    example: 'Ich frage nach dem Weg.'
  }
];