import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { AppState } from '../Store/reducers';
import { LoginActions } from '../Store/actions/login.actions';
import { sha256 } from 'js-sha256';
import { Validation } from '../Validators/validate';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { loginFeature } from 'app/Store/reducers/login.reducer';
import { time } from 'console';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private username!: string;
  private email!: string;
  private authChecked: boolean = false;
  constructor(private store: Store<AppState>) {
    this.subscription.add(
      this.store.select(loginFeature.selectUsername).subscribe((username) => {
        this.username = username;
      })
    );
    this.subscription.add(
      this.store.select(loginFeature.selectEmail).subscribe((email) => {
        this.email = email;
      })
    );
  }
  private subscription: Subscription = new Subscription();

  loggedIn!: boolean;
  emailAvailable: boolean = false;
  async Login(data: {
    email: string | undefined | null;
    password: string | undefined | null;
  }): Promise<boolean> {
    if (data.email && data.password) {
      return axios
        .post(
          'http://localhost:3000/user/login',
          JSON.stringify({
            email: data.email.toLowerCase(),
            password: sha256(data.password),
          }),
          {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          if (data) {
            this.store.dispatch(LoginActions.login({ user: data.User }));
            return true;
          } else {
            return false;
          }
        });
    }
    return false;
  }
  async SignUp(
    email: string | undefined | null,
    username: string | undefined | null,
    password: string | undefined | null,
    passwordConfirmation: string | undefined | null
  ): Promise<boolean> {
    let validation = new Validation();
    if (email && username && password && passwordConfirmation) {
      let httpBody = JSON.stringify({
        email: email.toLowerCase(),
        username: username,
        password: sha256(password),
      });
      if (
        validation.user(username) &&
        validation.password(password) &&
        validation.email(email)
      ) {
        if (validation.rePassword(password, passwordConfirmation)) {
          return axios
            .get(
              'http://localhost:3000/user/isEmailAvailable?email=' +
                email.toLowerCase()
            )
            .then((response) => response.data)
            .then((data) => {
              this.emailAvailable = data;
            })
            .then(() => {
              if (this.emailAvailable) {
                return axios
                  .post('http://localhost:3000/user/signup', httpBody, {
                    headers: { 'Content-Type': 'application/json' },
                  })
                  .then((response) => {
                    if (response.status === 201) {
                      return true;
                    } else {
                      return false;
                    }
                  });
              } else {
                alert('Email already exists');
                return false;
              }
            });
        } else {
          alert('Passwords do not match');
          return false;
        }
      } else {
        alert(
          'Username must be between 3 and 20 characters.\nPassword must be between 8 and 20 characters and contain at least one uppercase letter, one lowercase letter, and three numbers.'
        );
        return false;
      }
    } else {
      alert('Please mark the checkbox to continue');
      return false;
    }
  }
  async Logout(): Promise<boolean> {
    return axios
      .get('http://localhost:3000/user/logout', {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          this.store.dispatch(LoginActions.logout());
          return true;
        } else {
          return false;
        }
      });
  }
  isAuthenticated(): Promise<boolean> {
    return axios
      .get('http://localhost:3000/user/protected', {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          this.store.dispatch(LoginActions.login({ user: response.data }));
          this.authChecked = true;
          return true;
        } else {
          this.authChecked = true;
          return false;
        }
      })
      .catch(() => {
        this.authChecked = true;
        return false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isLoggedIn(): boolean {
    return this.username !== '' && this.email !== '' ? true : false;
  }

  isAuthChecked(): boolean {
    return this.authChecked;
  }
}