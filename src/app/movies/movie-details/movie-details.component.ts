import { Component, input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  public readonly description = input.required<string>();
  public readonly genres = input.required<readonly string[]>();
  public readonly imageURL = input.required<string>();
  public readonly rating = input.required<number>();
  public readonly releaseYear = input.required<string>();
  public readonly title = input.required<string>();
}
