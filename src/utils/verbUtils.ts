import { VerbCard } from '../types';

export const filterVerbsByCategory = (verbs: VerbCard[], category: string): VerbCard[] => {
  return verbs.filter(verb => verb.category === category);
};

export const getRandomVerb = (verbs: VerbCard[]): VerbCard => {
  const randomIndex = Math.floor(Math.random() * verbs.length);
  return verbs[randomIndex];
};

export const searchVerbs = (verbs: VerbCard[], query: string): VerbCard[] => {
  const searchTerm = query.toLowerCase();
  return verbs.filter(verb => 
    verb.german.toLowerCase().includes(searchTerm) ||
    verb.english.toLowerCase().includes(searchTerm)
  );
};

export const sortVerbsByDifficulty = (verbs: VerbCard[]): VerbCard[] => {
  return verbs.sort((a, b) => {
    // Regular verbs are considered easier than irregular verbs
    if (a.isRegular !== b.isRegular) {
      return a.isRegular ? -1 : 1;
    }
    // Sort by word length as a simple difficulty metric
    return a.german.length - b.german.length;
  });
};

export const getRelatedVerbs = (verb: VerbCard, allVerbs: VerbCard[]): VerbCard[] => {
  return allVerbs.filter(v => 
    v.id !== verb.id && 
    (v.category === verb.category || 
     v.german.includes(verb.german) ||
     v.english.includes(verb.english))
  );
};