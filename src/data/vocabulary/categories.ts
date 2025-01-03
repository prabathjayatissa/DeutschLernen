export const categories = {
  'Basics': 'Essential words and phrases',
  'Numbers': 'Numbers and counting',
  'Colors': 'Colors and shades',
  'Time': 'Time expressions and related words',
  'Family': 'Family members and relationships',
  'Food': 'Food, drinks, and dining',
  'Travel': 'Transportation and travel-related words',
  'Home': 'House, furniture, and household items',
  'Work': 'Professional and workplace vocabulary',
  'Education': 'School and learning-related terms',
  'Health': 'Body parts, health, and medical terms',
  'Nature': 'Nature, weather, and environment',
  'Shopping': 'Shopping and commerce terms',
  'Technology': 'Modern technology and devices',
  'Emotions': 'Feelings and emotional states',
  'Hobbies': 'Activities and interests',
  'Clothing': 'Clothing and accessories',
  'Animals': 'Animals and pets',
  'Places': 'Locations and places',
  'Culture': 'Cultural and social terms'
} as const;

export type VocabularyCategory = keyof typeof categories;