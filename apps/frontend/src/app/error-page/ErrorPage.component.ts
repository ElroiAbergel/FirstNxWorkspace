import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './ErrorPage.component.html',
  styleUrls: ['./ErrorPage.component.css'],
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  errorType!: string;
  subscription = new Subscription();
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.errorType = params.get('errorType') || '404';
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
