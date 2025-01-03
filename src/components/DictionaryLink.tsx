import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Props {
  word: string;
}

export function DictionaryLink({ word }: Props) {
  const dictionaryUrl = `https://en.langenscheidt.com/german-english/${encodeURIComponent(word)}`;
  
  return (
    <a
      href={dictionaryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <ExternalLink className="w-4 h-4" />
      Langenscheidt Dictionary
    </a>
  );
}