import { TestBed } from '@angular/core/testing';

import { CookbooksService } from './cookbooks.service';

describe('CookbooksService', () => {
  let service: CookbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
