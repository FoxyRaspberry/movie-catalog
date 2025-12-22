import { Component, DestroyRef, inject, type OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.css',
})
export class MoviesSectionComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef)
  readonly #moviesService = inject(MoviesService)

  public ngOnInit(): void {
    this.#moviesService.getList()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((movies): void => {
        console.table(movies)
      })
  }
}
