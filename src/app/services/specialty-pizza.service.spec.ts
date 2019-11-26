import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { SpecialtyPizzaService } from './specialty-pizza.service';
import { SpecialtyPizza } from '../data-classes/specialty-pizza';
import { URL } from '../url';

describe('SpecialtyPizzaService', () => {
  let testData: SpecialtyPizza[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        name: 'SpecialA',
        price: 5.99,
        description: 'StuffA',
      },
      {
        id: 2,
        name: 'SpecialB',
        price: 7.99,
        description: 'StuffB',
      },
      {
        id: 3,
        name: 'SpecialC',
        price: 9.99,
        description: 'StuffC',
      },
    ];
    TestBed.configureTestingModule({
      providers: [SpecialtyPizzaService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, SpecialtyPizzaService],
      (mockHttp: HttpTestingController, testService: SpecialtyPizzaService) => {
        const service: SpecialtyPizzaService = TestBed.get(SpecialtyPizzaService);
        expect(service).toBeTruthy();
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
