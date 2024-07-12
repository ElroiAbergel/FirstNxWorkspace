import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { CardModule } from 'primeng/card';
import {ResultsComponent} from './results.component'
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CardModule,
    CommonModule,
    StoreModule
  ],
  exports: [ResultsComponent]

})
export class ResultsModule { }
