import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, type OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { Movies } from '../movies.type';
import { MoviesListComponent } from "../movies-list/movies-list.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movies-section',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.css',
})
export class MoviesSectionComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef)
  readonly #moviesService = inject(MoviesService)

  protected readonly movies = signal<Movies>([])

  public ngOnInit(): void {
    this.#moviesService.getList()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((movies: Movies): void => {
        console.table(movies)
        this.movies.set(movies);
      })
  }
}
