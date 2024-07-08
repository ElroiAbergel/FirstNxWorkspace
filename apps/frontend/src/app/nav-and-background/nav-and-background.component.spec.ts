import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAndBackgroundComponent } from './nav-and-background.component';

describe('NavAndBackgroundComponent', () => {
  let component: NavAndBackgroundComponent;
  let fixture: ComponentFixture<NavAndBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavAndBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAndBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
