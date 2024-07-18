import { TestBed } from '@angular/core/testing';

import { NavManagementService } from './nav-management.service';

describe('NavManagementService', () => {
  let service: NavManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
