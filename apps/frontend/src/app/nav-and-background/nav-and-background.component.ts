import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {  loginFeature } from 'app/Store/reducers/login.reducer';
import { LoginActions } from 'app/Store/actions/login.actions';
import { Observable } from 'rxjs';
import {AppState} from 'app/Store/reducers';
@Component({
  selector: 'app-nav-and-background',
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {
  loggedIn$: Observable<boolean>;
  username$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.username$ = this.store.pipe(select(loginFeature.selectUsername));
    this.loggedIn$ = this.store.pipe(select(loginFeature.selectLoggedIn));
  }
  items: any = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/'
    },
    {
      label: 'Series',
      icon: 'pi pi-fw pi-desktop',
      routerLink: '/series'
    },
    {
      label: 'Movies',
      icon: 'pi pi-fw pi-video ',
      routerLink: '/movies'
    }
  ]
  logout() {
    this.store.dispatch(LoginActions.logout());
  }
}
