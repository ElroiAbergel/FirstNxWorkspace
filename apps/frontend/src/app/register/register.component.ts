import { Component } from '@angular/core';
import { Validation } from '../Validators/validate';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });

  emailAvailable: boolean = false;

  constructor(private router: Router) {}

  async SignUp() {
    const formValue = this.registerForm.value;
    console.log(formValue);
    let validation = new Validation();
    if (formValue.email && formValue.username && formValue.password && formValue.passwordConfirmation) {
      let httpBody = JSON.stringify({
        email: formValue.email.toLowerCase(),
        username: formValue.username,
        password: sha256(formValue.password),
      });
      if (
        validation.user(formValue.username) &&
        validation.password(formValue.password) &&
        validation.email(formValue.email)
      ) {
        if (
          validation.rePassword(
            formValue.password,
            formValue.passwordConfirmation
          )
        ) {
          await axios
            .get(
              'http://localhost:3000/user/isEmailAvailable?email=' +
                formValue.email.toLowerCase()
            )
            .then((response) => response.data)
            .then((data) => {
              this.emailAvailable = data;
            });

          if (this.emailAvailable) {
            await axios
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
            alert('Email already exists');
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
      alert('Please mark the checkbox to continue');
    }
  }
}
