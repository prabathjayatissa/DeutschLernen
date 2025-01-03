import type { Sentence } from '../../types/sentences';

export const travelSentences: Sentence[] = [
  {
    id: 's3',
    german: 'Ich möchte eine Fahrkarte nach Berlin kaufen.',
    english: 'I would like to buy a ticket to Berlin.',
    difficulty: 'beginner',
    context: 'Train Station',
    keywords: ['Fahrkarte', 'kaufen', 'Berlin'],
    verbIds: ['möchten', 'kaufen']
  },
  {
    id: 's4',
    german: 'Wann fährt der nächste Zug ab?',
    english: 'When does the next train depart?',
    difficulty: 'beginner',
    context: 'Train Station',
    keywords: ['Zug', 'abfahren', 'wann'],
    verbIds: ['abfahren']
  }
];