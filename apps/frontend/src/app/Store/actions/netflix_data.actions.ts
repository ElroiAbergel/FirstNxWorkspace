import { createAction, props } from '@ngrx/store';
import { NetflixDataModel } from 'Models/NetflixData.model';
const key = 'netflix_data';
const addArray = createAction(
  `[${key}] add`,
  props<{ netflix_data: NetflixDataModel[] }>()
);
const reset = createAction(`[${key}] reset`);

export const netflix_data_Actions = { addArray, reset };
