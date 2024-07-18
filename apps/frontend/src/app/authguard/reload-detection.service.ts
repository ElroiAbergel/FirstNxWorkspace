import { Injectable , Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ReloadDetectionService {
  private isPageReload = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      debugger;
      this.isPageReload = !!(window.performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]).find(e => e.type === 'reload');
      console.log(this.isPageReload);
      
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!this.isPageReload) {
          console.log('Navigated through address bar or link');
        } 
      }
    });
  }

  public isReload(): boolean {
    return this.isPageReload;
  }
}
