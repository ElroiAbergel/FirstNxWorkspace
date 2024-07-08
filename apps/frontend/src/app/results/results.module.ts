import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { CardModule } from 'primeng/card';
import {ResultsComponent} from './results.component'
@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CardModule,
    CommonModule
  ],
  exports: [ResultsComponent]

})
export class ResultsModule { }
