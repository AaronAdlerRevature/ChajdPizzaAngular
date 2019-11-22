import { TestBed } from '@angular/core/testing';

import { SFService } from './sf.service';

describe('SFService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SFService = TestBed.get(SFService);
    expect(service).toBeTruthy();
  });
});
