import { TestBed } from '@angular/core/testing';

import { PropertydisplayService } from './propertydisplay.service';

describe('PropertydisplayService', () => {
  let service: PropertydisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertydisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
