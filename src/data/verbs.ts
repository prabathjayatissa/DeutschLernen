import { VerbCard } from '../types';

export const verbData: VerbCard[] = [
  // Basic Verbs
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
  // Motion Verbs
  {
    id: 'v3',
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
    id: 'v4',
    german: 'kommen',
    english: 'to come',
    category: 'Motion',
    present: 'ich komme',
    past: 'ich kam',
    perfect: 'ich bin gekommen',
    isRegular: false,
    example: 'Ich komme aus Deutschland.'
  },
  // Daily Activities
  {
    id: 'v5',
    german: 'essen',
    english: 'to eat',
    category: 'Daily Activities',
    present: 'ich esse',
    past: 'ich aß',
    perfect: 'ich habe gegessen',
    isRegular: false,
    example: 'Ich esse gerne Pizza.'
  },
  // [... continuing with more verbs organized by categories ...]
];