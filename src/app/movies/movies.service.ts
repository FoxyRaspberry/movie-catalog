import { Injectable } from '@angular/core';
import { delay, of, type Observable } from 'rxjs';
import type { Movies } from './movies.type';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() {}

  public getList(): Observable<Movies> {
    return of(movies).pipe(delay(500));
  }
}

const movies: Movies = [
  {
    id: 1,
    title: 'Stranger Things',
  },
  {
    id: 2,
    title: 'Harry Potter',
  },
];
