import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  service: UserService = inject(UserService);
  loginForm = new FormGroup({});
  constructor(private router: Router, private store: Store) {}
  async Login() {
    const isLoggedIn = await this.service.Login(
      this.loginForm.value as {
        email: string | undefined | null;
        password: string | undefined | null;
      }
    );
    if (isLoggedIn) {
      alert('Successfully logged in!');
      this.router.navigate(['/']);
    } else {
      alert('Invalid email or password');
    }
  }
}
