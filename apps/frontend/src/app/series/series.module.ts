import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { ResultsModule } from '../results/results.module';
import { Button } from 'primeng/button';
import { NavAndBackgroundModule } from '../nav-and-background/nav-and-background.module';


@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule
    ,ResultsModule
    ,Button
    ,NavAndBackgroundModule
  ]
})
export class SeriesModule { }
