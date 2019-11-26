import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ToppingsService } from './toppings.service';
import { Topping } from '../data-classes/topping';
import { URL } from "../url";

describe('ToppingsService', () => {

  let testData: Topping[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        name: 'TopA',
      },
      {
        id: 2,
        name: 'TopB',
      },
      {
        id: 3,
        name: 'TopC',
      },
    ];
    TestBed.configureTestingModule({
      providers: [ToppingsService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, ToppingsService],
      (mockHttp: HttpTestingController, testService: ToppingsService) => {
        const service: ToppingsService = TestBed.get(ToppingsService);
        expect(service).toBeTruthy();
      }));

  it('should get all toppings',
    inject([HttpTestingController, ToppingsService],
      (mockHttp: HttpTestingController, testService: ToppingsService) => {
        // Mock call to HttpContext.
        testService.getToppings().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].name).toBe('TopA');

          expect(inData[1].id).toBe(2);
          expect(inData[1].name).toBe('TopB');

          expect(inData[2].id).toBe(3);
          expect(inData[2].name).toBe('TopC');
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/toppings');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
