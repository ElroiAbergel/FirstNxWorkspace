import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NetflixSearchNgmodule';
  service: UserService = inject(UserService);
  ngOnInit() {
    this.service.isAuthenticated();
  }
}
