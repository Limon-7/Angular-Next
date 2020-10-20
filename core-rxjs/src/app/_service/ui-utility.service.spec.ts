import { TestBed } from '@angular/core/testing';

import { UiUtilityService } from './ui-utility.service';

describe('UiUtilityService', () => {
  let service: UiUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
