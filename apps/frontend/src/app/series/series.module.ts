import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { ResultsModule } from '../results/results.module';
import { Button } from 'primeng/button';
import { NavAndBackgroundModule } from '../nav-and-background/nav-and-background.module';
import { NetflixService } from 'app/services/netflix.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule
    ,ResultsModule
    ,Button
    ,NavAndBackgroundModule
    ,FormsModule
  ]
  ,providers: [NetflixService]
})
export class SeriesModule { }
