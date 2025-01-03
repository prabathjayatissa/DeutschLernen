import { DictionaryEntry } from '../types/dictionary';

const LANGENSCHEIDT_BASE_URL = 'https://en.langenscheidt.com/german-english';

export async function searchDictionary(query: string): Promise<DictionaryEntry[]> {
  if (!query || query.length < 2) return [];

  try {
    const searchUrl = `${LANGENSCHEIDT_BASE_URL}/${encodeURIComponent(query)}`;
    
    // Return a link to the dictionary since we can't directly fetch from Langenscheidt
    return [{
      id: `lang_${Date.now()}`,
      german: query,
      english: 'View full translation on Langenscheidt',
      category: 'Dictionary Link',
      example: `Click to look up "${query}" in the Langenscheidt dictionary`
    }];
  } catch (error) {
    console.error('Dictionary search error:', error);
    throw new Error('An error occurred while searching the dictionary. Please try again.');
  }
}