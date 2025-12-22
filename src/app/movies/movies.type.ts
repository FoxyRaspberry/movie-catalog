export interface Movie {
  readonly description: string;
  readonly genres: readonly string[];
  readonly id: number;
  readonly imageURL: string;
  readonly rating: number;
  readonly releaseYear: string;
  readonly title: string;
}

export type Movies = readonly Movie[];
