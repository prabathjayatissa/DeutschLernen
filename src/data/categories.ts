export const categories = {
  'Essential Verbs': ['sein', 'haben', 'werden'],
  'Motion': ['gehen', 'kommen', 'fahren', 'laufen'],
  'Daily Activities': ['essen', 'trinken', 'schlafen', 'arbeiten'],
  'Communication': ['sprechen', 'sagen', 'fragen', 'antworten'],
  'Cognitive': ['denken', 'verstehen', 'lernen', 'wissen'],
  'Emotions': ['lieben', 'mögen', 'hassen', 'fühlen'],
} as const;

export type VerbCategory = keyof typeof categories;