import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputComponent } from './input/input.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CheckBoxComponent } from './check-box/checkBox.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PasswordComponent,
    InputComponent,
    CheckBoxComponent,
  ],
  imports: [
    CommonModule,
    DividerModule,
    PasswordModule,
    InputTextModule,
    CheckboxModule,
    ReactiveFormsModule
  ],
  exports: [
    PasswordComponent,
    InputComponent,
    CheckBoxComponent,
  ],
})
export class FormModule {}
