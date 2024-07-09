import { Component, inject, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormControl, FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-password-input',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class PasswordComponent {
  @Input() feedback: boolean = false;
  @Input({required:true}) controlKey: string = 'password';
  @Input() label: string = 'Password';
  parentContainer = inject(ControlContainer);
  get parentFromGroup() {
  return this.parentContainer.control as FormGroup;
  }
  ngOnInit(): void {
    this.parentFromGroup.addControl(this.controlKey, new FormControl('',Validators.required));
  }
  ngOnDestroy(): void {
    this.parentFromGroup.removeControl(this.controlKey);
  }
}
