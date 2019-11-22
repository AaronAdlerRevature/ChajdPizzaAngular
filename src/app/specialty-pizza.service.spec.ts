import { TestBed } from '@angular/core/testing';

import { SpecialtyPizzaService } from './specialty-pizza.service';

describe('SpecialtyPizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialtyPizzaService = TestBed.get(SpecialtyPizzaService);
    expect(service).toBeTruthy();
  });
});
