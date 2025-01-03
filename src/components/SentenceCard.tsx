import React from 'react';
import { Card } from './ui/Card';
import type { Sentence } from '../types/sentences';
import { Volume2 } from 'lucide-react';

interface Props {
  sentence: Sentence;
  showTranslation: boolean;
  onFlip: () => void;
}

export const SentenceCard: React.FC<Props> = ({
  sentence,
  showTranslation,
  onFlip,
}) => {
  const speakSentence = () => {
    const utterance = new SpeechSynthesisUtterance(sentence.german);
    utterance.lang = 'de-DE';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card
      onClick={onFlip}
      className="w-full max-w-md p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{sentence.context}</span>
          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
            {sentence.difficulty}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            speakSentence();
          }}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Volume2 className="w-5 h-5 text-blue-600" />
        </button>
      </div>
      
      <div className="text-center">
        <p className="text-xl font-bold mb-4">{sentence.german}</p>
        {showTranslation && (
          <p className="text-lg text-gray-700">{sentence.english}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {sentence.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};