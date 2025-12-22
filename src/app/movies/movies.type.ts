export interface Movie {
  readonly id: number;
  readonly title: string;
}

export type Movies = readonly Movie[];
