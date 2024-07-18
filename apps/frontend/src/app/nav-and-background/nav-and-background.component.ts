import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loginFeature } from 'app/Store/reducers/login.reducer';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';
import { AppState } from 'app/Store/reducers';
import { NavManagementService } from 'app/authguard/nav-management.service';
@Component({
  selector: 'app-nav-and-background',
  templateUrl: './nav-and-background.component.html',
  styleUrls: ['./nav-and-background.component.css'],
})
export class NavAndBackgroundComponent {
  username$: Observable<string>; //signal
  private user?: any;
  //masterSubscriber
  //change the form from bad name data to good name with a model
  //use services through the effects and not directly
  constructor(private store: Store<AppState> , protected navService: NavManagementService) {
    this.username$ = this.store.pipe(select(loginFeature.selectUsername));
    const aaa = this.username$.subscribe((user) => {
      this.user = user;
    });

    aaa.unsubscribe();
  }
  authService: AuthService = inject(AuthService);
  items: any = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => { this.navService.routeTo('home')}
    },
    {
      label: 'Series',
      icon: 'pi pi-fw pi-desktop',
      command: () => { this.navService.routeTo('series')}
    },
    {
      label: 'Movies',
      icon: 'pi pi-fw pi-video ',
      command: () => { this.navService.routeTo('movies')}
    },
  ];

  async logout() {
    await this.authService.Logout();
    this.navService.routeTo('login');
  }
}
