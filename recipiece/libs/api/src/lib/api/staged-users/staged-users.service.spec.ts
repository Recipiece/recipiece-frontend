import { TestBed } from '@angular/core/testing';

import { StagedUsersService } from './staged-users.service';

describe('StagedUsersService', () => {
  let service: StagedUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagedUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
