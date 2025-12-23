import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movies-list-item',
  standalone: true,
  templateUrl: './movies-list-item.component.html',
  styleUrl: './movies-list-item.component.css',
})
export class MoviesListItemComponent {
  public readonly imageURL = input.required<string>();
  public readonly releaseYear = input.required<string>();
  public readonly title = input.required<string>();
}
