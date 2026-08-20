export const LANGUAGE_IDS = {
  ENGLISH: 1,
  ARABIC: 2,
  MARATHI: 3
} as const;

export type LanguageIdType = (typeof LANGUAGE_IDS)[keyof typeof LANGUAGE_IDS];
