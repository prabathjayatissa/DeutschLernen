import type { DictionaryEntry, WordCategory } from '../types/dictionary';

export function parseDictionaryLine(line: string): DictionaryEntry | null {
  if (!line || !line.includes(' :: ')) return null;

  try {
    const [german, englishPart] = line.split(' :: ');
    if (!german || !englishPart) return null;

    // Extract word type and clean up the English part
    const type = extractWordType(englishPart);
    const cleanGerman = cleanText(german);
    const cleanEnglish = cleanText(englishPart);
    
    if (!cleanGerman || !cleanEnglish) return null;
    
    return {
      id: generateId(),
      german: cleanGerman,
      english: cleanEnglish,
      category: determineCategory(type, cleanEnglish),
      example: generateExample(cleanGerman, type)
    };
  } catch (error) {
    console.error('Error parsing dictionary line:', error);
    return null;
  }
}

function extractWordType(text: string): string {
  const typeMatch = text.match(/\{([^}]+)\}/);
  return typeMatch ? typeMatch[1] : '';
}

function cleanText(text: string): string {
  return text
    .replace(/\{[^}]+\}/g, '') // Remove type annotations
    .replace(/\[[^\]]+\]/g, '') // Remove additional info
    .replace(/\([^)]+\)/g, '') // Remove parenthetical notes
    .split(';')[0] // Take only the first definition
    .trim();
}

function generateId(): string {
  return `dict_${Math.random().toString(36).substring(2, 11)}`;
}

function determineCategory(type: string, english: string): WordCategory {
  if (type.includes('verb')) return 'Verb';
  if (type.includes('noun')) return 'Noun';
  if (type.includes('adj')) return 'Adjective';
  if (english.includes(', ') || english.includes('; ')) return 'Phrase';
  return 'Other';
}

function generateExample(german: string, type: string): string | undefined {
  if (type.includes('verb')) {
    return `Ich ${german}e.`;
  }
  if (type.includes('noun')) {
    return `Das ist ein ${german}.`;
  }
  return undefined;
}