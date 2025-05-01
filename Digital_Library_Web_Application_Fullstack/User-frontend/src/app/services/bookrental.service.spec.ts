import { TestBed } from '@angular/core/testing';

import { BookrentalService } from './bookrental.service';

describe('BookrentalService', () => {
  let service: BookrentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookrentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
