import { Component , inject, Input} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormControl, FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  viewProviders: [{
    provide:ControlContainer,
    useFactory: () => inject(ControlContainer,{skipSelf:true})
  }]
})
export class InputComponent {  parentContainer = inject(ControlContainer);
  @Input({required:true}) controlKey: string = '';
  @Input() label: string = 'Input';
  get parentFromGroup() {
  return this.parentContainer.control as FormGroup;
  }
  ngOnInit(): void {
    this.parentFromGroup.addControl(this.controlKey, new FormControl('',Validators.required));
  }
  ngOnDestroy(): void {
    this.parentFromGroup.removeControl(this.controlKey);
  }}
