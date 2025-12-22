import { Injectable } from '@angular/core';
import { delay, of, type Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() {}

  public getList(): Observable<Movies> {
    return of(movies).pipe(delay(500));
  }
}

interface Movie {
  readonly id: number;
  readonly title: string;
}

type Movies = readonly Movie[];

const movies: Movies = [
  {
    id: 1,
    title: 'Stranger Things',
  },
];
