import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginActions } from '../Store/actions/login.actions';
import { sha256 } from 'js-sha256';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email:string='';

  constructor(private router: Router, private store: Store) {}

  Login() {
    axios
      .get(
       "http://localhost:3000/user/login?email="+this.email+"&password="+sha256(this.password)
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        if (data) {
          this.store.dispatch(LoginActions.login({ username: data }));
          alert('Successfully logged in!');
          this.router.navigate(['/']);
        } else {
          alert('Failed to log in. Please try again.');
        }
      });
  }
}
