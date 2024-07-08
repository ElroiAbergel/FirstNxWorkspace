import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  loginFeature } from '../Store/reducers/login.reducer';
import { LoginActions } from 'app/Store/actions/login.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav-and-background',
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css'
})
export class NavAndBackgroundComponent {
  loggedIn$: Observable<boolean>;
  username$: Observable<string>;
  constructor(private store: Store<{ username: string, loggedIn: boolean }>) {
    this.username$ = this.store.select(loginFeature.selectUsername);
    this.loggedIn$ = this.store.select(loginFeature.selectLoggedIn);
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
