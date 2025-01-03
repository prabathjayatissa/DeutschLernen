import React from 'react';
import { Card } from './ui/Card';
import { VerbCard as VerbCardType } from '../types';
import { Volume2 } from 'lucide-react';

interface Props {
  card: VerbCardType;
  showTranslation: boolean;
  onFlip: () => void;
}

export const VerbCard: React.FC<Props> = ({ card, showTranslation, onFlip }) => {
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
        {showTranslation && (
          <>
            <p className="text-xl text-gray-700 mb-4">{card.english}</p>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
              <div>
                <p className="font-semibold">Present</p>
                <p>{card.present}</p>
              </div>
              <div>
                <p className="font-semibold">Past</p>
                <p>{card.past}</p>
              </div>
              <div>
                <p className="font-semibold">Perfect</p>
                <p>{card.perfect}</p>
              </div>
            </div>
            {card.example && (
              <p className="text-sm text-gray-600 italic mt-2">{card.example}</p>
            )}
          </>
        )}
      </div>
    </Card>
  );
};