import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ResultsModule } from '../results/results.module';
import { NavAndBackgroundModule } from '../nav-and-background/nav-and-background.module';
import { ButtonModule } from 'primeng/button'
import { ResultsComponent } from '../results/results.component';
import { RouterLink } from '@angular/router';
import { NetflixService } from 'app/services/netflix.service';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterLink,
    ResultsModule,
    ButtonModule,
    NavAndBackgroundModule
  ],
  providers: [NetflixService],

})
export class HomeModule { }
