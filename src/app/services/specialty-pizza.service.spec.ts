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

  it('should get all specialty pizzas',
    inject([HttpTestingController, SpecialtyPizzaService],
      (mockHttp: HttpTestingController, testService: SpecialtyPizzaService) => {
        // Mock call to HttpContext.
        testService.getSpecialPizzas().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].name).toBe('SpecialA');
          expect(inData[0].price).toBe(5.99);
          expect(inData[0].description).toBe('StuffA');

          expect(inData[1].id).toBe(2);
          expect(inData[1].name).toBe('SpecialB');
          expect(inData[1].price).toBe(7.99);
          expect(inData[1].description).toBe('StuffB');

          expect(inData[2].id).toBe(3);
          expect(inData[2].name).toBe('SpecialC');
          expect(inData[2].price).toBe(9.99);
          expect(inData[2].description).toBe('StuffC');
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/special');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  it('should get specialty pizza 1',
    inject([HttpTestingController, SpecialtyPizzaService],
      (mockHttp: HttpTestingController, testService: SpecialtyPizzaService) => {
        // Mock call to HttpContext.
        testService.getSpecialPizza(1).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.name).toBe('SpecialA');
          expect(inData.price).toBe(5.99);
          expect(inData.description).toBe('StuffA');
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/special/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
