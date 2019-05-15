import { TestBed } from '@angular/core/testing';

import { PlatformServiceService } from './platform-service.service';

describe('PlatformServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatformServiceService = TestBed.get(PlatformServiceService);
    expect(service).toBeTruthy();
  });
});
