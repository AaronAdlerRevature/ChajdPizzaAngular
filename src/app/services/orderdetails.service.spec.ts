import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { OrderdetailsService } from './orderdetails.service';
import { URL } from '../url';
import { Orderdetail } from '../data-classes/orderdetail';

describe('OrderdetailsService', () => {

  let testData: Orderdetail[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        ordersId: 1,
        sizeId: 1,
        toppingsSelected: 'A,B,C',
        toppingsCount: 3,
        price: 10.99,
        specialRequest: 'None',
        orders: null,
        size: null,
      },
      {
        id: 2,
        ordersId: 1,
        sizeId: 3,
        toppingsSelected: 'C,D',
        toppingsCount: 2,
        price: 8.99,
        specialRequest: 'None',
        orders: null,
        size: null,
      },
      {
        id: 3,
        ordersId: 2,
        sizeId: 2,
        toppingsSelected: 'A',
        toppingsCount: 1,
        price: 12.99,
        specialRequest: 'NO',
        orders: null,
        size: null,
      },
    ];

    TestBed.configureTestingModule({
      providers: [OrderdetailsService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, OrderdetailsService],
      (mockHttp: HttpTestingController, testService: OrderdetailsService) => {
        const service: OrderdetailsService = TestBed.get(OrderdetailsService);
        expect(service).toBeTruthy();
      }));

  it('should get all order details',
    inject([HttpTestingController, OrderdetailsService],
      (mockHttp: HttpTestingController, testService: OrderdetailsService) => {
        // Mock call to HttpContext.
        testService.getOrderDetails().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].ordersId).toBe(1);
          expect(inData[0].sizeId).toBe(1);
          expect(inData[0].toppingsSelected).toBe('A,B,C');
          expect(inData[0].toppingsCount).toBe(3);
          expect(inData[0].price).toBe(10.99);
          expect(inData[0].specialRequest).toBe('None');
          expect(inData[0].orders).toBeNull();
          expect(inData[0].size).toBeNull();

          expect(inData[1].id).toBe(2);
          expect(inData[1].ordersId).toBe(1);
          expect(inData[1].sizeId).toBe(3);
          expect(inData[1].toppingsSelected).toBe('C,D');
          expect(inData[1].toppingsCount).toBe(2);
          expect(inData[1].price).toBe(8.99);
          expect(inData[1].specialRequest).toBe('None');
          expect(inData[1].orders).toBeNull();
          expect(inData[1].size).toBeNull();

          expect(inData[2].id).toBe(3);
          expect(inData[2].ordersId).toBe(2);
          expect(inData[2].sizeId).toBe(2);
          expect(inData[2].toppingsSelected).toBe('A');
          expect(inData[2].toppingsCount).toBe(1);
          expect(inData[2].price).toBe(12.99);
          expect(inData[2].specialRequest).toBe('NO');
          expect(inData[2].orders).toBeNull();
          expect(inData[2].size).toBeNull();

        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/orderdetailsapi/');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
