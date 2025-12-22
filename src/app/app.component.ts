import { Component } from '@angular/core';
import { MoviesSectionComponent } from "./movies/movies-section/movies-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
