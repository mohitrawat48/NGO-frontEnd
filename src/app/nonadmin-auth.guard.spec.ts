import { TestBed, async, inject } from '@angular/core/testing';

import { NonadminAuthGuard } from './nonadmin-auth.guard';

describe('NonadminAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonadminAuthGuard]
    });
  });

  it('should ...', inject([NonadminAuthGuard], (guard: NonadminAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
