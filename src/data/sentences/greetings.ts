import type { Sentence } from '../../types/sentences';

export const greetingSentences: Sentence[] = [
  {
    id: 'greet1',
    german: 'Guten Morgen! Wie geht es Ihnen?',
    english: 'Good morning! How are you?',
    difficulty: 'beginner',
    context: 'Formal Greetings',
    keywords: ['Morgen', 'formal', 'greeting'],
    verbIds: ['gehen']
  },
  {
    id: 'greet2',
    german: 'Schönen Tag noch!',
    english: 'Have a nice day!',
    difficulty: 'beginner',
    context: 'Farewells',
    keywords: ['farewell', 'polite', 'day'],
    verbIds: ['haben']
  }
];