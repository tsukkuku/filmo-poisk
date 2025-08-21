export interface MovieList {
  totalPages: number;
  items: MovieInfo[];
}

export interface MovieInfo {
  kinopoiskId: number;
  type: string;
  nameRu: string;
  nameOriginal: string;
  year: number;
  ratingKinopoisk: number;
  posterUrlPreview: string;
  genres: [{ genre: string }];
  countries: [{ country: string }];
}

export interface MoviePageInfo {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrlPreview: string;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  serial: boolean;
  webUrl: string;
  completed: boolean;
  startYear: number;
  endYear: number;
  countries: [{ country: string }];
  genres: [{ genre: string }];
}

export interface Movies {
  total: number;
  totalPages: number;
  items: MoviePageInfo[];
}

export interface PersonsList {
  items: Person[];
}

export interface Person {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  posterUrl: string;
}
