import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { DictionaryEntry } from '../types/dictionary';

interface Props {
  entry: DictionaryEntry;
}

export function DictionaryResult({ entry }: Props) {
  const dictionaryUrl = `https://en.langenscheidt.com/german-english/${encodeURIComponent(entry.german)}`;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{entry.german}</h3>
          <a
            href={dictionaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 mt-1"
          >
            <ExternalLink className="w-4 h-4" />
            View in Langenscheidt Dictionary
          </a>
        </div>
      </div>
    </div>
  );
}