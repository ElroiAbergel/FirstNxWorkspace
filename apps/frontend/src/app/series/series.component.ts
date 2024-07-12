import { Component, inject } from '@angular/core';
import { NetflixService } from 'app/services/netflix.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
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
      { movie: false, series: true },
      this.inputValue
    );
    setTimeout(
      () => this.ScrollToResults(document.getElementById('results')),
      1250
    );
  }
}
