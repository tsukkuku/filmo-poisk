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

export interface SequelMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface PersonInfo {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: string;
}

export interface SimilarMovies {
  total: number;
  items: [
    {
      filmId: number;
      nameRu: string;
      nameEn: string;
      nameOriginal: string;
      posterUrlPreview: string;
      relationType: string;
    }
  ];
}

export interface PremiereInfo {
  items: [
    {
      type: string;
      date: string;
      country: { country: string };
    }
  ];
}

export interface MovieFacts {
  total: number;
  items: [{ text: string; type: string; spoiler: boolean }];
}
