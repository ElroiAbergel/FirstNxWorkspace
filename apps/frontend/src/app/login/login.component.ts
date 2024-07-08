import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginActions } from '../Store/actions/login.actions';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private store: Store) {}

  Login() {
    axios
      .get(
        'http://localhost:3000/user/login?username=' +
          this.username +
          '&password=' +
          this.password
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        if (data) {
          console.log('Username before dispatch:', this.username); // Debugging line
          this.store.dispatch(LoginActions.login({ username: this.username }));
          alert('Successfully logged in!');
          this.router.navigate(['/']);
        } else {
          alert('Failed to log in. Please try again.');
        }
      });
  }
}
