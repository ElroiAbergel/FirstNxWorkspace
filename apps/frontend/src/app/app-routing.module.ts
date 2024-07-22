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
import { AuthGuard } from './authguard/auth.guard';
import { ErrorPageModule } from './error-page/error-page.module';
import { ErrorPageComponent } from './error-page/ErrorPage.component';
export const routes: Routes = [
  {
    path: 'error/:errorType',
    component: ErrorPageComponent,
  },
  { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent , canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    LoginModule,
    RegisterModule,
    SeriesModule,
    MoviesModule,
    ErrorPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
