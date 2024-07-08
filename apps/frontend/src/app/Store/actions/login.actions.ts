import { createAction, props } from '@ngrx/store';

const key = 'Login';
const login = createAction(`[${key}] Login`, props<{ username: string }>());
const logout = createAction(`[${key}] Logout`);

export const LoginActions = { login, logout };
