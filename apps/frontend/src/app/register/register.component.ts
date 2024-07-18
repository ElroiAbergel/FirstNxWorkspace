import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { NavManagementService } from 'app/authguard/nav-management.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  service: AuthService = inject(AuthService);
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });
  constructor(protected navService:NavManagementService) {}
  async SignUp() {
    const result = await this.service.SignUp(
      this.registerForm.value.email,
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.passwordConfirmation
    );
    if (result) {
      alert('Successfully registered! Please log in.');
      this.navService.routeTo('login');
    }
  }
}
