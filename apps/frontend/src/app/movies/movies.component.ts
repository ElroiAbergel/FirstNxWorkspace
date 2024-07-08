import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ResultsComponent } from '../results/results.component';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  ScrollToResults(element: HTMLElement | null) {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  @ViewChild(ResultsComponent, { static: false }) results!: ResultsComponent;
  ScrollAndShowResults() {
    let textinput = document.getElementById("search") as HTMLInputElement;
    if (textinput && textinput.value) {
      document.getElementById("resultsComponent")?.style.setProperty("display", "");
        this.results.loadResults(textinput.value, "movie");
      setTimeout(() => this.ScrollToResults(document.getElementById("results")), 2500);
    }
  }

}
