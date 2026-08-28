
export interface StatusLookup {
  name: string;
  nameEn: string;
  nameAr: string;
  nameMr: string;
  value: boolean;
}

export interface DurationLookup {
  id: number;
  value: number;
}

export interface GenderLookup {
  id: number;
  name: string;
  nameEn: string;
  nameAr: string;
  nameMr: string;
}

export interface CategoryDetailsLookup {
  id: number;
  name: string;
  nameEn: string;
  nameAr: string;
  nameMr: string;
}

export type NationalityLookup = {
  id?: number;
  code: string;
  name?: string | null;
  countryName: string;
  dialingCode: string;
  codeWithDialing: string;
  isEnabled?: boolean;
};

