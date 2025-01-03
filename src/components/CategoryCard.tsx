import React from 'react';
import { Book } from 'lucide-react';
import type { VocabularyCategory } from '../data/vocabulary/categories';

interface Props {
  category: VocabularyCategory;
  description: string;
  onClick: () => void;
}

export function CategoryCard({ category, description, onClick }: Props) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Book className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}