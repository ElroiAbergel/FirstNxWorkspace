import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { NavManagementService } from './authguard/nav-management.service';
export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NetflixSearch';

  constructor(private router: Router, private authService: AuthService) {
    router.navigate(['/home'],{skipLocationChange : true})
  }
  
  ngOnInit() {
    this.authService.isAuthenticated();
  }
}
