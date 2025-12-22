import { Component, input } from '@angular/core';
import { Movies } from '../movies.type';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  public readonly list = input.required<Movies>()
}
