import { createReducer, on, createFeature } from '@ngrx/store';
import { LoginActions } from '../actions/login.actions';
import { UserLogin } from '../../../Models/User-Login.model';

export const initialState: UserLogin = { username: '', loggedIn: false };
export const loginFeatureKey = 'login';

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state, { username }) => ({
    username: username,
    loggedIn: true,
  })),
  on(LoginActions.logout, (state) => ({ username: '', loggedIn: false }))
);

export const loginFeature = createFeature({
  name: loginFeatureKey,
  reducer: loginReducer,
});
