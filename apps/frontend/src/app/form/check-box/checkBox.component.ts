import { Component, inject } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-check-box',
  templateUrl: './checkBox.component.html',
  styleUrl: './checkBox.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class CheckBoxComponent {
  parentContainer = inject(ControlContainer);
  get parentFromGroup() {
    return this.parentContainer.control as FormGroup;
  }
  ngOnInit(): void {
    this.parentFromGroup.addControl(
      'check-box',
      new FormControl('', Validators.required)
    );
  }
  ngOnDestroy(): void {
    this.parentFromGroup.removeControl('check-box');
  }
}
