import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginActions } from '../Store/actions/login.actions';
import { sha256 } from 'js-sha256';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private store: Store) {}

  async Login() {
    const formValue = this.loginForm.value;
    if (formValue.email && formValue.password) {
     await axios
      .get(
       "http://localhost:3000/user/login?email="+(formValue.email).toLowerCase()+"&password="+sha256(formValue.password)
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
}
