import { Component, inject } from '@angular/core';
import { NavManagementService } from 'app/authguard/nav-management.service';
import { NetflixService } from 'app/services/netflix.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    protected navService: NavManagementService,
    private netflixService: NetflixService
  ) {
    netflixService.loadRandomData();
  }
}
