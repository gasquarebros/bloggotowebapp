import { TestBed } from '@angular/core/testing';

import { BookingdataService } from './bookingdata.service';

describe('BookingdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingdataService = TestBed.get(BookingdataService);
    expect(service).toBeTruthy();
  });
});
