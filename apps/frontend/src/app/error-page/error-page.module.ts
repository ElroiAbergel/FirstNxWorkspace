import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './ErrorPage.component';

@NgModule({
  declarations:[ErrorPageComponent],
  imports: [CommonModule],
  exports: [ErrorPageComponent],
})
export class ErrorPageModule {}
