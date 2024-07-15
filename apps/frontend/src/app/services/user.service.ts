import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/reducers/index';
import { LoginActions } from '../Store/actions/login.actions';
import { sha256 } from 'js-sha256';
import { Validation } from '../Validators/validate';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store<AppState>) {}
  emailAvailable: boolean = false;
  async Login(data: {
    email: string | undefined | null;
    password: string | undefined | null;
  }): Promise<boolean> {
    if (data.email && data.password) {
      return axios
        .get(
          'http://localhost:3000/user/login?email=' +
            data.email.toLowerCase() +
            '&password=' +
            sha256(data.password)
        )
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          if (data) {
            this.store.dispatch(LoginActions.login({ username: data }));
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
                  .post('http://localhost:3000/user', httpBody, {
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
}
