import { TestBed, inject } from '@angular/core/testing';

import { AddinitiativeService } from './addinitiative.service';

describe('AddinitiativeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddinitiativeService]
    });
  });

  it('should be created', inject([AddinitiativeService], (service: AddinitiativeService) => {
    expect(service).toBeTruthy();
  }));
});
