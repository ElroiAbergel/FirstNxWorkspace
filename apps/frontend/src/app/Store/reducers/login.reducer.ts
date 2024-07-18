import { createReducer, on, createFeature } from '@ngrx/store';
import { LoginActions } from '../actions/login.actions';
import { User } from '../../../Models/User.model';

export const initialState: User = {email:'',username:''};
export const loginFeatureKey = 'login';

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state, { user }) => ({
    username: user.username,
    email: user.email,
  }) as User),
  on(LoginActions.logout, (state) => ({ username: '', email: '' }))
);

export const loginFeature = createFeature({
  name: loginFeatureKey,
  reducer: loginReducer,
});

