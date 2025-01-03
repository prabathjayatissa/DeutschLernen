import type { Sentence } from '../../types/sentences';

export const directionSentences: Sentence[] = [
  {
    id: 'dir1',
    german: 'Wo ist der Bahnhof?',
    english: 'Where is the train station?',
    difficulty: 'beginner',
    context: 'Directions',
    keywords: ['location', 'station', 'question'],
    verbIds: ['sein']
  },
  {
    id: 'dir2',
    german: 'Gehen Sie geradeaus und dann nach links.',
    english: 'Go straight ahead and then turn left.',
    difficulty: 'beginner',
    context: 'Directions',
    keywords: ['directions', 'left', 'straight'],
    verbIds: ['gehen']
  }
];