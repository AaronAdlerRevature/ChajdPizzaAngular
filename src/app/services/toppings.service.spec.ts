import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ToppingsService } from './toppings.service';
import { Topping } from '../data-classes/topping';

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

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
