export const GENDER_TYPE = {
  MALE: 1,
  FEMALE: 2,
  UNISEX: 3,
} as const;

export type GenderTypeInterface =
  (typeof GENDER_TYPE)[keyof typeof GENDER_TYPE];
