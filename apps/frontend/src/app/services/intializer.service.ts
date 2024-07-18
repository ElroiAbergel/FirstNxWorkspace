import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class initializerService {
  private config: any;
  service = inject(AuthService);
  loadCookie() {
   this.service.isAuthenticated();
  }
}
