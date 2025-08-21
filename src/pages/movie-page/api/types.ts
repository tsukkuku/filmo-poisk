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
