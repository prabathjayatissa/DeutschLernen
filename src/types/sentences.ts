export interface Sentence {
  id: string;
  german: string;
  english: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  context: string;
  keywords: string[];
  verbIds: string[]; // References to verbs used in the sentence
}

export interface SentenceCategory {
  id: string;
  name: string;
  description: string;
}