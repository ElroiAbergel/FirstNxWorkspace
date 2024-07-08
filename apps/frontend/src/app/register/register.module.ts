import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { NavAndBackgroundModule } from '../nav-and-background/nav-and-background.module';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule
    , ButtonModule
    , CheckboxModule
    , FormsModule
    , PasswordModule
    , InputTextModule
    , NavAndBackgroundModule
    , RouterLink

  ]
})
export class RegisterModule { }
