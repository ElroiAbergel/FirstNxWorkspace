import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './Store/reducers';
import { environment } from '../../environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { NavAndBackgroundModule } from "./nav-and-background/nav-and-background.module";
import { APP_INITIALIZER } from '@angular/core';
import { initializerService } from './services/intializer.service';
export function initializeApp(initializerService: initializerService) {
  return () : void  => {
    return initializerService.loadCookie();
  }
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([]),
    NavAndBackgroundModule
],
  providers: [
    provideStoreDevtools({ maxAge: 25, logOnly: environment.production }),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [initializerService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
