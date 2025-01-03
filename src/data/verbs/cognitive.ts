import type { VerbCard } from '../../types';

export const cognitiveVerbs: VerbCard[] = [
  {
    id: 'v13',
    german: 'denken',
    english: 'to think',
    category: 'Cognitive',
    present: 'ich denke',
    past: 'ich dachte',
    perfect: 'ich habe gedacht',
    isRegular: false,
    example: 'Ich denke an dich.'
  },
  {
    id: 'v14',
    german: 'verstehen',
    english: 'to understand',
    category: 'Cognitive',
    present: 'ich verstehe',
    past: 'ich verstand',
    perfect: 'ich habe verstanden',
    isRegular: false,
    example: 'Ich verstehe das Problem.'
  },
  {
    id: 'v15',
    german: 'lernen',
    english: 'to learn',
    category: 'Cognitive',
    present: 'ich lerne',
    past: 'ich lernte',
    perfect: 'ich habe gelernt',
    isRegular: true,
    example: 'Ich lerne jeden Tag.'
  }
];