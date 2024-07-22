import { Injectable ,PLATFORM_ID,inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { NavManagementService } from './nav-management.service';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private navManageService: NavManagementService,
  ) {}
  private readonly platformId = inject(PLATFORM_ID);

  canActivate( route : ActivatedRouteSnapshot) {
    const canNavigate = this.navManageService.canNavigate();
    const currentUrl = route.url.join('/');
    if(isPlatformBrowser(this.platformId)){
    if (
      canNavigate || 
      this.isRefreshedPage(currentUrl) ||
      !sessionStorage.getItem('lastAccessedRoute')
    )  {
      this.storeLastAccessedRoute(currentUrl);
      return true;
    } else {
        this.navManageService.routeTo(sessionStorage.getItem('lastAccessedRoute') || '');
      return false;
    }

  }
  else
  {
    return false
  } 
}
  private isRefreshedPage(currentUrl: string): boolean {
    const lastAccessedRoute = sessionStorage.getItem('lastAccessedRoute');
    return lastAccessedRoute === currentUrl;
  }
  
  private storeLastAccessedRoute(currentUrl: string): void {
    sessionStorage.setItem('lastAccessedRoute', currentUrl);
  }
  
}


