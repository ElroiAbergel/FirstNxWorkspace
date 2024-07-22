import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavManagementService {
  navigationAllowed: boolean = false;
  constructor(private route:Router) { }
  AllowNavigation() {
    this.navigationAllowed = true;
  }
  DisallowNavigation() {
    this.navigationAllowed = false;
  }
  canNavigate() {
    return this.navigationAllowed;
  }

  async navigateTo(url: string) {
    if (this.navigationAllowed) {
     await this.route.navigate([url] , {skipLocationChange: true} );
     this.DisallowNavigation();
    }
  }
  routeTo(url: string) {
    this.AllowNavigation();
    this.navigateTo(url);
  }
}
