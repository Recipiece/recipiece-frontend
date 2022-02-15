import { TestBed } from '@angular/core/testing';

import { PreventNotLoggedInGuard } from './prevent-not-logged-in.guard';

describe('PreventNotLoggedInGuard', () => {
  let guard: PreventNotLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventNotLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
