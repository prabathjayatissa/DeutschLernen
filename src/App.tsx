import React, { useState, useEffect } from 'react';
import { GraduationCap, X } from 'lucide-react';
import { vocabularyData } from './data/vocabulary';
import { VocabularyCard } from './components/VocabularyCard';
import { ProgressBar } from './components/ProgressBar';
import { CategoryGrid } from './components/CategoryGrid';
import type { LearningProgress } from './types';
import type { VocabularyCategory } from './data/vocabulary/categories';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<VocabularyCategory | null>(null);
  const [progress, setProgress] = useState<LearningProgress>({
    correct: 0,
    total: 0,
  });

  const filteredCards = selectedCategory
    ? vocabularyData.filter(card => card.category === selectedCategory)
    : vocabularyData;

  // Reset progress when category changes
  useEffect(() => {
    setProgress({ correct: 0, total: 0 });
  }, [selectedCategory]);

  const handleNextCard = () => {
    if (filteredCards.length === 0) return;
    setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length);
    setShowTranslation(false);
  };

  const handleKnowCard = () => {
    if (filteredCards.length === 0) return;
    setProgress((prev) => ({
      correct: prev.correct + 1,
      total: prev.total + 1,
    }));
    handleNextCard();
  };

  const handleDontKnow = () => {
    if (filteredCards.length === 0) return;
    setProgress((prev) => ({
      ...prev,
      total: prev.total + 1,
    }));
    handleNextCard();
  };

  const handleCategorySelect = (category: VocabularyCategory) => {
    setSelectedCategory(category);
    setCurrentCardIndex(0);
    setShowTranslation(false);
  };

  const clearCategory = () => {
    setSelectedCategory(null);
    setCurrentCardIndex(0);
    setShowTranslation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Deutsch Lernen</h1>
          <p className="text-gray-600">Master German vocabulary one word at a time</p>
        </header>

        {!selectedCategory ? (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Categories</h2>
            <CategoryGrid onSelectCategory={handleCategorySelect} />
          </div>
        ) : (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{selectedCategory}</h2>
              <button
                onClick={clearCategory}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
                Clear Category
              </button>
            </div>
            
            {filteredCards.length > 0 ? (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-600">
                      {progress.correct}/{progress.total} words learned
                    </span>
                  </div>
                  <ProgressBar correct={progress.correct} total={progress.total} />
                </div>

                <div className="mb-8">
                  <VocabularyCard
                    card={filteredCards[currentCardIndex]}
                    showTranslation={showTranslation}
                    onFlip={() => setShowTranslation(!showTranslation)}
                  />
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleDontKnow}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Don't Know
                  </button>
                  <button
                    onClick={handleKnowCard}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Know It
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center p-8 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600">No cards available in this category yet.</p>
                <button
                  onClick={clearCategory}
                  className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-700"
                >
                  Return to Categories
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;