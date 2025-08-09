export interface MovieList {
  items: MovieInfo[];
}

export interface MovieInfo {
  id: number;
  nameRu: string;
  nameOriginal: string;
  year: number;
  ratingKinopoisk: number;
  posterUrlPreview: string;
}
