import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loginFeature } from 'app/Store/reducers/login.reducer';
import { UserService } from 'app/services/user.service';
import { Observable } from 'rxjs';
import { AppState } from 'app/Store/reducers';
@Component({
  selector: 'app-nav-and-background',
  templateUrl: './nav-and-background.component.html',
  styleUrl: './nav-and-background.component.css',
})
export class NavAndBackgroundComponent {
  username$: Observable<string>; //signal
  private user?: any;
  //masterSubscriber
  //change the form from bad name data to good name with a model
  //use services through the effects and not directly
  constructor(private store: Store<AppState>) {
    this.username$ = this.store.pipe(select(loginFeature.selectUsername));
    const aaa = this.username$.subscribe((user) => {
      this.user = user;
    });

    aaa.unsubscribe();
  }
  service: UserService = inject(UserService);
  items: any = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/',
    },
    {
      label: 'Series',
      icon: 'pi pi-fw pi-desktop',
      routerLink: '/series',
    },
    {
      label: 'Movies',
      icon: 'pi pi-fw pi-video ',
      routerLink: '/movies',
    },
  ];
  logout() {
    this.service.Logout();
  }
}
