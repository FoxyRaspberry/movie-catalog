import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal, type OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesService } from '../movies.service';
import type { Movie, Movies } from '../movies.type';
import { PopupComponent } from "../popup/popup.component";
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movies-section',
  standalone: true,
  imports: [
    FormsModule,
    MovieDetailsComponent,
    MoviesListComponent,
    PopupComponent,
],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.css',
})
export class MoviesSectionComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #moviesService = inject(MoviesService);

  protected readonly movieDetails = signal<Movie>({
    description: 'No data.',
    genres: [],
    id: 0,
    imageURL: 'NoData',
    rating: 0,
    releaseYear: 'NoData',
    title: 'No data',
  });
  protected readonly movies = signal<Movies>([]);

  protected readonly listIsEmptyText = 'No results found for your request.';
  protected readonly listIsShown = computed<boolean>(() => !!this.movies().length);
  protected readonly popupIsShown = signal(false);
  protected readonly searchPlaceholder = 'Search';
  protected searchValue = '';

  public ngOnInit(): void {
    this.#moviesService.getList(this.searchValue)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((movies: Movies): void => {
        this.movies.set(movies);
      });
  }

  protected listItemClickedHandler(movieID: number): void {
    this.#moviesService.getItem(movieID)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((movieDetails: Movie): void => {
        this.movieDetails.set(movieDetails);
        this.popupIsShown.set(true);
      });
  }

  protected popupCloseButtonClickHandler(): void {
    this.popupIsShown.set(false);
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
