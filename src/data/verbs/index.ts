import { essentialVerbs } from './essential';
import { motionVerbs } from './motion';
import { dailyVerbs } from './daily';
import { communicationVerbs } from './communication';
import { cognitiveVerbs } from './cognitive';
import { emotionVerbs } from './emotion';

export const allVerbs = [
  ...essentialVerbs,
  ...motionVerbs,
  ...dailyVerbs,
  ...communicationVerbs,
  ...cognitiveVerbs,
  ...emotionVerbs
];

export const getVerbsByCategory = (category: string) => {
  return allVerbs.filter(verb => verb.category === category);
};

export const getVerbById = (id: string) => {
  return allVerbs.find(verb => verb.id === id);
};

export const getVerbCategories = () => {
  return [...new Set(allVerbs.map(verb => verb.category))];
};