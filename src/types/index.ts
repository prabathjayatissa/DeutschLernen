export interface VocabularyCard {
  id: string;
  german: string;
  english: string;
  category: string;
  example?: string;
}

export interface VerbCard extends VocabularyCard {
  present: string;
  past: string;
  perfect: string;
  isRegular: boolean;
}

export interface LearningProgress {
  correct: number;
  total: number;
}