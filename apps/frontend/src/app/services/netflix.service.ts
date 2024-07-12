import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/reducers/index';
import axios from 'axios';
import {
  NetflixDataModel,
  OriginalDataModel,
} from '../../Models/NetflixData.model';
import { netflix_data_Actions } from 'app/Store/actions/netflix_data.actions';

@Injectable({
  providedIn: 'root',
})
export class NetflixService {
  private convertData(data: OriginalDataModel[]): NetflixDataModel[] {
    const resArray: NetflixDataModel[] = data.map((obj: OriginalDataModel) => ({
      title: obj.title,
      type: obj.type,
      listed_in: obj.listed_in,
      Image_URL: obj.Image_URL,
    }));
    return resArray;
  }

  constructor(private store: Store<AppState>) {}
  reset() {
    this.store.dispatch(netflix_data_Actions.reset());
  }
  loadRandomData() {
    this.store.dispatch(netflix_data_Actions.reset());
    axios
      .get('http://localhost:3000/netflix/random')
      .then((response) => {
        return response.data;
      })
      .then((res) => {
        const resArray = this.convertData(res);
        this.store.dispatch(
          netflix_data_Actions.addArray({ netflix_data: resArray })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadSearchData(options: SearchType, inputValue: string) {
    this.store.dispatch(netflix_data_Actions.reset());  
    if (
      (!options.movie && !options.series) ||
      (options.movie && options.series)
    ) {
      console.error('Only one of the options should be true.');
      return;
    }
    const typeOfSearch = options.movie ? 'movie' : 'series';
    axios
      .get(`http://localhost:3000/netflix/${typeOfSearch}?title=${inputValue}`)
      .then((response) => {
        return response.data;
      })
      .then((res) => {
        const resArray: NetflixDataModel[] = this.convertData(res);
        this.store.dispatch(
          netflix_data_Actions.addArray({ netflix_data: resArray })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
interface SearchType {
  movie: boolean;
  series: boolean;
}
