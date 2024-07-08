import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { NavAndBackgroundModule } from '../nav-and-background/nav-and-background.module';
import { ResultsModule } from '../results/results.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    ResultsModule,
    Button,
    NavAndBackgroundModule

  ]
})
export class MoviesModule { }
