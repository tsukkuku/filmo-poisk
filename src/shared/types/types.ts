export interface Movies {
  docs: MovieInfo[];
}

export interface MovieInfo {
  id: number;
  name: string;
  year: number;
  poster: {
    previewUrl: string;
  };
}
