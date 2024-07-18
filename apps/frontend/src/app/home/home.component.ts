import { Component, inject } from '@angular/core';
import { NetflixService } from 'app/services/netflix.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  service: NetflixService = inject(NetflixService);
  ngOnInit() {
    debugger;
    this.service.loadRandomData();
  }
}
