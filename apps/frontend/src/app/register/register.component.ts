import { Component } from '@angular/core';
import { Validation } from '../Validators/validate';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import axios from 'axios';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  emailAvailable: boolean = false;
  username: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  email: string = '';
  checkbox: boolean = false;
  constructor(private router: Router) {}
  async SignUp() {
    let httpBody = JSON.stringify({
      email: this.email,
      username: this.username,
      password: sha256(this.password),
    });
    let validation = new Validation();
    if (this.checkbox) {
      if (
        (this.username, this.password, this.passwordConfirmation, this.email)
      ) {
        if (
          validation.user(this.username) &&
          validation.password(this.password) &&
          validation.email(this.email)
        ) {
          if (validation.rePassword(this.password, this.passwordConfirmation)) {
            await axios
              .get(
                'http://localhost:3000/user/isEmailAvailable?email=' +
                  this.email
              )
              .then((response) => response.data)
              .then((data) => {
                this.emailAvailable = data;
              });
            if (this.emailAvailable) {
              axios
                .post('http://localhost:3000/user', httpBody, {
                  headers: { 'Content-Type': 'application/json' },
                })
                .then((response) => {
                  if (response.status === 201) {
                    alert('Successfully registered! Please log in.');
                    this.router.navigate(['/login']);
                  } else {
                    console.log('Failed');
                  }
                });
            } else {
              alert('Username already exists');
            }
          } else {
            alert('Passwords do not match');
          }
        } else {
          alert(
            'Username must be between 3 and 20 characters.\nPassword must be between 8 and 20 characters and contain at least one uppercase letter, one lowercase letter, and three numbers.'
          );
        }
      } else {
        alert('Please fill in all fields');
      }
    } else {
      alert('Please mark the checkbox to continue');
    }
  }
}
