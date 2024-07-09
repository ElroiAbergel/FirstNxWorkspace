import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NavAndBackgroundModule } from '../nav-and-background/nav-and-background.module';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'app/form/form.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule
    , ButtonModule
    , FormsModule
    , NavAndBackgroundModule
    , RouterLink
    , ReactiveFormsModule
    , FormModule

  ]
})
export class RegisterModule { }
