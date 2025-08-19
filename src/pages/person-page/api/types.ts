export interface Spouse {
  personId: number;
  name: string;
  divorced: boolean;
  divorcedReason: string;
  sex: string;
  children: number;
  webUrl: string;
  relation: string;
}

export interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string;
  rating: string;
  general: boolean;
  description: string;
  professionKey: string;
}

export interface PersonDetails {
  personId: number;
  webUrl: string;
  nameRu: string;
  nameEn: string;
  sex: string;
  posterUrl: string;
  growth: number;
  birthday: string;
  death: string | null;
  age: number;
  birthplace: string;
  deathplace: string | null;
  hasAwards: number;
  profession: string;
  facts: string[];
  spouses: Spouse[];
  films: Film[];
}
