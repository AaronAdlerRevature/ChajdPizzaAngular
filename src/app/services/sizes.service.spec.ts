import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { SizesService } from './sizes.service';
import { URL } from '../url';
import { Size } from '../data-classes/size';

describe('SizesService', () => {

  let testData: Size[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        baseSize: 'Small',
        s_Price: 3.99,
      },
      {
        id: 2,
        baseSize: 'Medium',
        s_Price: 4.99,
      },
      {
        id: 3,
        baseSize: 'Large',
        s_Price: 5.99,
      },
    ];
    TestBed.configureTestingModule({
      providers: [SizesService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, SizesService],
      (mockHttp: HttpTestingController, testService: SizesService) => {
        const service: SizesService = TestBed.get(SizesService);
        expect(service).toBeTruthy();
      }));

  it('should get all pizza sizes',
    inject([HttpTestingController, SizesService],
      (mockHttp: HttpTestingController, testService: SizesService) => {
        // Mock call to HttpContext.
        testService.getSizes().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].baseSize).toBe('Small');
          expect(inData[0].s_Price).toBe(3.99);

          expect(inData[1].id).toBe(2);
          expect(inData[1].baseSize).toBe('Medium');
          expect(inData[1].s_Price).toBe(4.99);

          expect(inData[2].id).toBe(3);
          expect(inData[2].baseSize).toBe('Large');
          expect(inData[2].s_Price).toBe(5.99);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/sizes');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  it('should get pizza size 1',
    inject([HttpTestingController, SizesService],
      (mockHttp: HttpTestingController, testService: SizesService) => {
        // Mock call to HttpContext.
        testService.getSize(1).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.baseSize).toBe('Small');
          expect(inData.s_Price).toBe(3.99);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/PizzaTypesAPI/sizes/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
