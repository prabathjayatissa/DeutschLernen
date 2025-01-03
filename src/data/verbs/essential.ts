import type { VerbCard } from '../../types';

export const essentialVerbs: VerbCard[] = [
  {
    id: 'v1',
    german: 'sein',
    english: 'to be',
    category: 'Essential Verbs',
    present: 'ich bin',
    past: 'ich war',
    perfect: 'ich bin gewesen',
    isRegular: false,
    example: 'Ich bin müde.'
  },
  {
    id: 'v2',
    german: 'haben',
    english: 'to have',
    category: 'Essential Verbs',
    present: 'ich habe',
    past: 'ich hatte',
    perfect: 'ich habe gehabt',
    isRegular: false,
    example: 'Ich habe einen Hund.'
  },
  {
    id: 'v3',
    german: 'werden',
    english: 'to become',
    category: 'Essential Verbs',
    present: 'ich werde',
    past: 'ich wurde',
    perfect: 'ich bin geworden',
    isRegular: false,
    example: 'Ich werde Arzt.'
  }
];