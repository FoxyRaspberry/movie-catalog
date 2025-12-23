import { Injectable } from '@angular/core';
import { delay, of, type Observable } from 'rxjs';
import type { Movie, Movies } from './movies.type';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  public getList(titleFilter: string): Observable<Movies> {
    const titleFilterPrepared = titleFilter.toLocaleLowerCase();
    const result = movies.filter((movie: Movie): boolean => {
      return movie.title.toLocaleLowerCase().includes(titleFilterPrepared);
    });

    return of(result).pipe(delay(500));
  }
}

const movies: Movies = [
  {
    description: 'Very good movie.',
    genres: ['Drama', 'Comedy'],
    id: 1,
    imageURL: 'https://placehold.jp/150x150.png',
    rating: 9.9,
    releaseYear: '2016',
    title: 'Stranger Things',
  },
  {
    description: 'Very very very well movies.',
    genres: ['Fantasy', 'Drama'],
    id: 2,
    imageURL: 'https://placehold.jp/150x150.png',
    rating: 9.9,
    releaseYear: '2000',
    title: 'Harry Potter',
  },
];
