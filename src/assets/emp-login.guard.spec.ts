import { TestBed } from '@angular/core/testing';

import { EmpLoginGuard } from './emp-login.guard';

describe('EmpLoginGuard', () => {
  let guard: EmpLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmpLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
