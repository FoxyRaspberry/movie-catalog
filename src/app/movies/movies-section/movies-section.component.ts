import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal, type OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { MoviesListComponent } from "../movies-list/movies-list.component";
import { MoviesService } from '../movies.service';
import type { Movies } from '../movies.type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movies-section',
  standalone: true,
  imports: [
    FormsModule,
    MoviesListComponent,
  ],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.css',
})
export class MoviesSectionComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #moviesService = inject(MoviesService);

  protected readonly movies = signal<Movies>([]);

  protected readonly listIsEmptyText = 'No results found for your request.';
  protected readonly listIsShown = computed<boolean>(() => !!this.movies().length);
  protected readonly searchPlaceholder = 'Search';
  protected searchValue = '';

  public ngOnInit(): void {
    this.#moviesService.getList(this.searchValue)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((movies: Movies): void => {
        this.movies.set(movies);
      });
  }

  protected searchModelChangeHandler(searchValue: string): void {
    this.#moviesService.getList(searchValue)
      .pipe(
        first(),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe((movies: Movies): void => {
        this.movies.set(movies);
      });
  }
}
