import type { Sentence } from '../types/sentences';
import type { VerbCard } from '../types';

export const filterSentencesByDifficulty = (
  sentences: Sentence[],
  difficulty: Sentence['difficulty']
): Sentence[] => {
  return sentences.filter(sentence => sentence.difficulty === difficulty);
};

export const filterSentencesByVerb = (
  sentences: Sentence[],
  verbId: string
): Sentence[] => {
  return sentences.filter(sentence => sentence.verbIds.includes(verbId));
};

export const getSentencesWithVerb = (
  sentences: Sentence[],
  verb: VerbCard
): Sentence[] => {
  return sentences.filter(sentence => 
    sentence.german.toLowerCase().includes(verb.german.toLowerCase())
  );
};