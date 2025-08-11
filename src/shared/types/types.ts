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

export interface PersonsList {
  items: Person[];
}

export interface Person {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  posterUrl: string;
}
