import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { SFService } from './sf.service';
import { URL } from '../url';
import { SF } from '../data-classes/sf';

describe('SFService', () => {

  let testData: SF[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        price: 1.50,
      },
      {
        id: 2,
        price: 3.00,
      },
    ];
    TestBed.configureTestingModule({
      providers: [SFService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, SFService],
      (mockHttp: HttpTestingController, testService: SFService) => {
        const service: SFService = TestBed.get(SFService);
        expect(service).toBeTruthy();
      }));

  it('should get all SF sizes',
    inject([HttpTestingController, SFService],
      (mockHttp: HttpTestingController, testService: SFService) => {
        // Mock call to HttpContext.
        testService.getSFs().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].price).toBe(1.50);

          expect(inData[1].id).toBe(2);
          expect(inData[1].price).toBe(3.00);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/sf');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  it('should get SF 1',
    inject([HttpTestingController, SFService],
      (mockHttp: HttpTestingController, testService: SFService) => {
        // Mock call to HttpContext.
        testService.getSF(1).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.price).toBe(1.50);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/sf/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  it('should get SF 1 price',
    inject([HttpTestingController, SFService],
      (mockHttp: HttpTestingController, testService: SFService) => {
        // Mock call to HttpContext.
        testService.getSFPrice(1).subscribe(inData => {
          // Check response data.
          expect(+inData).toBe(1.50);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/sf/price/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0].price);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
