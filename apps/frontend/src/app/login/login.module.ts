import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { NavAndBackgroundModule } from '../nav-and-background/nav-and-background.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    NavAndBackgroundModule
  ]
})
export class LoginModule { }
