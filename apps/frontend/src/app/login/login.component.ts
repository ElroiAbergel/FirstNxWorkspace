import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { NavManagementService } from 'app/authguard/nav-management.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  service: AuthService = inject(AuthService);
  loginForm = new FormGroup({});
  constructor(protected navService : NavManagementService, private store: Store) {}
  async Login() {
    const isLoggedIn = await this.service.Login(
      this.loginForm.value as {
        email: string | undefined | null;
        password: string | undefined | null;
      }
    );
    if (isLoggedIn) {
      alert('Successfully logged in!');
      this.navService.routeTo('home');
    } else {
      alert('Invalid email or password');
    }
  }
}
