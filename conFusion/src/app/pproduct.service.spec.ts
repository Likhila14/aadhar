import { TestBed } from '@angular/core/testing';

import { PproductService } from './pproduct.service';

describe('PproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PproductService = TestBed.get(PproductService);
    expect(service).toBeTruthy();
  });
});
