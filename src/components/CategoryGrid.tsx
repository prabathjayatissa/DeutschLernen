import React from 'react';
import { categories } from '../data/vocabulary/categories';
import { CategoryCard } from './CategoryCard';
import type { VocabularyCategory } from '../data/vocabulary/categories';

interface Props {
  onSelectCategory: (category: VocabularyCategory) => void;
}

export function CategoryGrid({ onSelectCategory }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {Object.entries(categories).map(([category, description]) => (
        <CategoryCard 
          key={category} 
          category={category as VocabularyCategory}
          description={description}
          onClick={() => onSelectCategory(category as VocabularyCategory)}
        />
      ))}
    </div>
  );
}