import type { VerbCard } from '../types';
import type { DictionaryEntry } from './dictionaryParser';

const VERB_PATTERNS = {
  regular: {
    present: (stem: string) => `${stem}e`,
    past: (stem: string) => `${stem}te`,
    perfect: (stem: string) => `ge${stem}t`
  },
  irregular: {
    // Common irregular patterns - can be expanded
    sein: {
      present: 'bin',
      past: 'war',
      perfect: 'gewesen'
    },
    haben: {
      present: 'habe',
      past: 'hatte',
      perfect: 'gehabt'
    }
  }
};

export function enrichVerbData(entry: DictionaryEntry): VerbCard | null {
  if (entry.type !== 'verb') return null;

  const german = entry.german.replace('sich ', ''); // Remove reflexive pronoun
  const isIrregular = entry.tags.some(tag => 
    tag.includes('irregular') || tag.includes('strong verb')
  );

  return {
    id: `v${Math.random().toString(36).substr(2, 9)}`,
    german,
    english: entry.english,
    category: determineVerbCategory(entry),
    present: `ich ${getVerbForm(german, 'present', isIrregular)}`,
    past: `ich ${getVerbForm(german, 'past', isIrregular)}`,
    perfect: `ich ${getVerbForm(german, 'perfect', isIrregular)}`,
    isRegular: !isIrregular,
    example: generateExample(german, entry.english)
  };
}

function getVerbForm(verb: string, tense: 'present' | 'past' | 'perfect', isIrregular: boolean): string {
  const stem = verb.replace(/en$/, '');
  
  if (isIrregular && verb in VERB_PATTERNS.irregular) {
    return VERB_PATTERNS.irregular[verb as keyof typeof VERB_PATTERNS.irregular][tense];
  }
  
  return VERB_PATTERNS.regular[tense](stem);
}

function determineVerbCategory(entry: DictionaryEntry): string {
  // Existing category determination logic
  const categoryKeywords = {
    'Motion': ['move', 'walk', 'run', 'jump', 'fly', 'swim'],
    'Communication': ['speak', 'say', 'tell', 'talk', 'write', 'read'],
    'Cognitive': ['think', 'learn', 'study', 'understand', 'know', 'remember'],
    'Emotions': ['feel', 'love', 'hate', 'like', 'fear', 'enjoy'],
    'Daily Activities': ['eat', 'drink', 'sleep', 'work', 'cook', 'clean'],
    'Social': ['meet', 'help', 'play', 'visit', 'celebrate', 'share']
  };

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => entry.english.includes(keyword))) {
      return category;
    }
  }

  return 'Other';
}

function generateExample(german: string, english: string): string {
  // Generate a simple example sentence
  return `Ich ${german}e jeden Tag.`; // Basic example pattern
}