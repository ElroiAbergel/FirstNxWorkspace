import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavManagementService } from './nav-management.service';
import { ReloadDetectionService } from './reload-detection.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private navManageService: NavManagementService,
    private reloadDetectService: ReloadDetectionService,
    private router: Router
  ) {}

  canActivate() {
    const canNavigate = this.navManageService.canNavigate();
    debugger
    if (canNavigate || this.reloadDetectService.isReload()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
