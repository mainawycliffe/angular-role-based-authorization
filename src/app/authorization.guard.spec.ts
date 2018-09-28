import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizationGuard } from './authorization.guard';

describe('AuthorizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationGuard]
    });
  });

  it('should ...', inject([AuthorizationGuard], (guard: AuthorizationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
