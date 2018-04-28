import { TestBed, inject } from '@angular/core/testing';

import { ProductRepositoryService } from './product-repository.service';

describe('ProductRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductRepositoryService]
    });
  });

  it('should be created', inject([ProductRepositoryService], (service: ProductRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
