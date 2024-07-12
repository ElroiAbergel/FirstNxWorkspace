import { Component, inject } from '@angular/core';
import { NetflixService } from 'app/services/netflix.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  inputValue: string = '';
  service: NetflixService = inject(NetflixService);
  ngOnInit() {
    this.service.reset();
  }
  ScrollToResults(element: HTMLElement | null) {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ScrollAndShowResults() {
    this.service.loadSearchData(
      { movie: true, series: false },
      this.inputValue
    );
    setTimeout(
      () => this.ScrollToResults(document.getElementById('results')),
      1250
    );
  }
}
