import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Movies } from '../movies.type';
import { MoviesListItemComponent } from '../movies-list-item/movies-list-item.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movies-list',
  standalone: true,
  imports: [MoviesListItemComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  public readonly list = input.required<Movies>();
  public readonly itemClicked = output<number>();

  protected itemClickHandler(movieID: number): void {
    this.itemClicked.emit(movieID)
  }
}
