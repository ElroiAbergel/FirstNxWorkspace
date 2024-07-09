import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { loginFeature } from './Store/reducers/login.reducer';
import { environment } from '../../environment';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(loginFeature),
  ],
  providers: [
    provideStoreDevtools({ maxAge: 25, logOnly: environment.production }),
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
