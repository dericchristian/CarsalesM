import { TestBed } from '@angular/core/testing';

import { CarStoreServiceService } from './car-store-service.service';

describe('CarStoreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarStoreServiceService = TestBed.get(CarStoreServiceService);
    expect(service).toBeTruthy();
  });
});
