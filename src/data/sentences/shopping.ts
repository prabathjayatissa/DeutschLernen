import type { Sentence } from '../../types/sentences';

export const shoppingSentences: Sentence[] = [
  {
    id: 'shop1',
    german: 'Was kostet das?',
    english: 'How much does this cost?',
    difficulty: 'beginner',
    context: 'Shopping',
    keywords: ['price', 'cost', 'question'],
    verbIds: ['kosten']
  },
  {
    id: 'shop2',
    german: 'Ich möchte das anprobieren.',
    english: 'I would like to try this on.',
    difficulty: 'beginner',
    context: 'Clothing Store',
    keywords: ['shopping', 'clothes', 'try on'],
    verbIds: ['möchten', 'anprobieren']
  }
];