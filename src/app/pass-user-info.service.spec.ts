import { TestBed } from '@angular/core/testing';

import { PassUserInfoService } from './pass-user-info.service';

describe('PassUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassUserInfoService = TestBed.get(PassUserInfoService);
    expect(service).toBeTruthy();
  });
});
