import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { searchDictionary } from '../services/dictionaryService';
import type { DictionaryEntry } from '../types/dictionary';
import { DictionaryResult } from './DictionaryResult';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';

export function DictionaryViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const { results, loading, error } = useDebouncedSearch(searchTerm);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">German-English Dictionary</h2>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for words in German or English..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Search dictionary"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {error && (
        <div className="text-center text-red-600 mb-4 p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : results.length > 0 ? (
        <div className="grid gap-4">
          {results.map((result) => (
            <DictionaryResult key={result.id} entry={result} />
          ))}
        </div>
      ) : searchTerm.length > 0 ? (
        <div className="text-center text-gray-600 p-4 bg-gray-50 rounded-lg">
          No results found for "{searchTerm}"
        </div>
      ) : null}
    </div>
  );
}