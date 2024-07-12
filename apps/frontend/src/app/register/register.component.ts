import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  service: UserService = inject(UserService);
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });
  constructor(private router: Router) {}
  async SignUp() {
    const result =  await this.service.SignUp(
      this.registerForm.value.email,
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.passwordConfirmation
    );
      if (result) {
        alert('Successfully registered! Please log in.');
        this.router.navigate(['/login']);
      }
    };
}
