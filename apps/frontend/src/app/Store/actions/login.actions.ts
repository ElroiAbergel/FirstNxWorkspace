import { createAction, props } from '@ngrx/store';
import { User } from '../../../Models/User.model';
const key = 'Login';
const login = createAction(`[${key}] Login`, props<{ user: User }>());
const logout = createAction(`[${key}] Logout`);

export const LoginActions = { login, logout };
