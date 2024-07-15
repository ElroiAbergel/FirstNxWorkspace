import { ActionReducerMap } from '@ngrx/store';
import { loginFeature } from './login.reducer';
import { netflixFeature } from './netflix.reducer';
import { User } from '../../../Models/User.model';
import { NetflixDataModel } from '../../../Models/NetflixData.model';

export interface AppState {
  login: User;
  netflix_data: NetflixDataModel[];
}

export const reducers: ActionReducerMap<AppState> = {
  login: loginFeature.reducer,
  netflix_data: netflixFeature.reducer,
};
