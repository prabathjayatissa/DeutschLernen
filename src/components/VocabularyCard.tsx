import React from 'react';
import { Card } from './ui/Card';
import { Volume2 } from 'lucide-react';
import { DictionaryLink } from './DictionaryLink';
import type { VocabularyCard as VocabularyCardType } from '../types';

interface Props {
  card: VocabularyCardType | undefined;
  showTranslation: boolean;
  onFlip: () => void;
}

export const VocabularyCard: React.FC<Props> = ({ card, showTranslation, onFlip }) => {
  if (!card) {
    return (
      <Card className="w-full max-w-md p-6 text-center">
        <p className="text-gray-600">No cards available in this category.</p>
      </Card>
    );
  }

  const speakWord = () => {
    const utterance = new SpeechSynthesisUtterance(card.german);
    utterance.lang = 'de-DE';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card
      onClick={onFlip}
      className="w-full max-w-md p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">{card.category}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            speakWord();
          }}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Volume2 className="w-5 h-5 text-blue-600" />
        </button>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{card.german}</h2>
        <div className="mb-2">
          <DictionaryLink word={card.german} />
        </div>
        {showTranslation && (
          <>
            <p className="text-xl text-gray-700 mb-2">{card.english}</p>
            {card.example && (
              <p className="text-sm text-gray-600 italic mt-4">{card.example}</p>
            )}
          </>
        )}
      </div>
    </Card>
  );
};