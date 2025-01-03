import type { VerbCard } from '../types';

export async function fetchVerbData(): Promise<VerbCard[]> {
  try {
    const response = await fetch('https://raw.githubusercontent.com/SavSanta/ding-de/master/data/de-en.txt');
    const text = await response.text();
    
    return parseVerbEntries(text);
  } catch (error) {
    console.error('Error fetching verb data:', error);
    return [];
  }
}

function parseVerbEntries(text: string): VerbCard[] {
  const lines = text.split('\n');
  const verbs: VerbCard[] = [];
  let currentId = 19; // Continue from last verb ID

  for (const line of lines) {
    if (line.includes(' :: ') && line.includes('verb')) {
      const [german, english] = line.split(' :: ');
      const cleanGerman = german.trim().replace(/\{.*?\}/g, '');
      const cleanEnglish = english.trim()
        .replace(/\[.*?\]/g, '')
        .replace(/\{.*?\}/g, '')
        .split(';')[0];

      if (cleanGerman.startsWith('to ') || !cleanEnglish.startsWith('to ')) {
        continue;
      }

      const category = determineVerbCategory(cleanEnglish);
      
      verbs.push({
        id: `v${currentId++}`,
        german: cleanGerman,
        english: cleanEnglish,
        category,
        present: `ich ${cleanGerman}e`,
        past: `ich ${cleanGerman}te`,
        perfect: `ich habe ge${cleanGerman}t`,
        isRegular: true,
        example: `Ich ${cleanGerman}e.`
      });
    }
  }

  return verbs;
}

function determineVerbCategory(english: string): string {
  const categoryKeywords = {
    'Motion': ['move', 'walk', 'run', 'jump', 'fly', 'swim'],
    'Communication': ['speak', 'say', 'tell', 'talk', 'write', 'read'],
    'Cognitive': ['think', 'learn', 'study', 'understand', 'know', 'remember'],
    'Emotions': ['feel', 'love', 'hate', 'like', 'fear', 'enjoy'],
    'Daily Activities': ['eat', 'drink', 'sleep', 'work', 'cook', 'clean'],
    'Social': ['meet', 'help', 'play', 'visit', 'celebrate', 'share']
  };

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => english.includes(keyword))) {
      return category;
    }
  }

  return 'Other';
}