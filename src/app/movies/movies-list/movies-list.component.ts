import { Component, input } from '@angular/core';
import { Movies } from '../movies.type';
import { MoviesListItemComponent } from "../movies-list-item/movies-list-item.component";

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [MoviesListItemComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  public readonly list = input.required<Movies>();
}
