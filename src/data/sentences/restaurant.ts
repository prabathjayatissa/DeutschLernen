import type { Sentence } from '../../types/sentences';

export const restaurantSentences: Sentence[] = [
  {
    id: 'rest1',
    german: 'Ich hätte gerne die Speisekarte.',
    english: 'I would like the menu, please.',
    difficulty: 'beginner',
    context: 'Restaurant',
    keywords: ['menu', 'order', 'polite'],
    verbIds: ['haben']
  },
  {
    id: 'rest2',
    german: 'Können Sie uns einen Tisch für zwei empfehlen?',
    english: 'Can you recommend a table for two?',
    difficulty: 'intermediate',
    context: 'Restaurant',
    keywords: ['table', 'recommendation', 'booking'],
    verbIds: ['können', 'empfehlen']
  }
];