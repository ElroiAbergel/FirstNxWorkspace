import { Component , Input } from '@angular/core';
import { NetflixDataModel } from '../../Models/NetflixData.model';
import { Store ,select } from '@ngrx/store';
import { AppState } from '../Store/reducers/index';
import { netflixFeature } from 'app/Store/reducers/netflix.reducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  data$: Observable<NetflixDataModel[]>;
  constructor(private store: Store<AppState>) {
  this.data$ = this.store.pipe(select(netflixFeature.selectNetflix_dataState));
  }  
  @Input("TypeOfSearch")
  TypeOfSearch!: string;
  @Input("Random")
  Random!: boolean;
}
