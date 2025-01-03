import { useState, useEffect } from 'react';
import { searchDictionary } from '../services/dictionaryService';
import type { DictionaryEntry } from '../types/dictionary';

const DEBOUNCE_DELAY = 300;

export function useDebouncedSearch(searchTerm: string) {
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (searchTerm.length < 2) {
        setResults([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await searchDictionary(searchTerm);
        setResults(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to search dictionary');
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  return { results, loading, error };
}