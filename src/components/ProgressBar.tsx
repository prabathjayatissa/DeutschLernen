import React from 'react';

interface Props {
  correct: number;
  total: number;
}

export const ProgressBar: React.FC<Props> = ({ correct, total }) => {
  const percentage = total === 0 ? 0 : (correct / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};