export interface DictionaryEntry {
  id: string;
  german: string;
  english: string;
  category: string;
  example?: string;
}

export type WordCategory = 'Verb' | 'Noun' | 'Adjective' | 'Phrase' | 'Other';