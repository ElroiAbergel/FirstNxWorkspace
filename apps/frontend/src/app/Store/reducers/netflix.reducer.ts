import { createReducer, on, createFeature } from '@ngrx/store';
import { netflix_data_Actions } from '../actions/netflix_data.actions';
import { NetflixDataModel } from 'Models/NetflixData.model';

export const initialState: NetflixDataModel[] = [];
export const NetflixFeatureKey = 'netflix_data';

export const netflixReducer = createReducer(
  initialState,
  on(netflix_data_Actions.addArray, (state, netflix_data) => [
    ...state,
    ...netflix_data.netflix_data,
  ]),
  on(netflix_data_Actions.reset, (state) => [])
);

export const netflixFeature = createFeature({
  name: NetflixFeatureKey,
  reducer: netflixReducer,
});
