import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SeriesModule } from './series/series.module';
import { MoviesModule } from './movies/movies.module';
export const routes: Routes = [
  { 'path': '', component: HomeComponent } ,
  { 'path': 'series', component: SeriesComponent } ,
  { 'path': 'movies', component: MoviesComponent } ,
  { "path": "login", component: LoginComponent},
  { "path": "register", component: RegisterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule,LoginModule,RegisterModule,SeriesModule,MoviesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
