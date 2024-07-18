import { TestBed } from '@angular/core/testing';

import { IntializerService } from './intializer.service';

describe('IntializerService', () => {
  let service: IntializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
