import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { OrderdetailsService } from './orderdetails.service';
import { URL } from '../url';
import { Orderdetail } from '../data-classes/orderdetail';
import { debug } from 'util';
import { resource } from 'selenium-webdriver/http';

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

  it('should get order detail 1',
    inject([HttpTestingController, OrderdetailsService],
      (mockHttp: HttpTestingController, testService: OrderdetailsService) => {
        // Mock call to HttpContext.
        testService.getOrderDetail(1).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.ordersId).toBe(1);
          expect(inData.sizeId).toBe(1);
          expect(inData.toppingsSelected).toBe('A,B,C');
          expect(inData.toppingsCount).toBe(3);
          expect(inData.price).toBe(10.99);
          expect(inData.specialRequest).toBe('None');
          expect(inData.orders).toBeNull();
          expect(inData.size).toBeNull();
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/orderdetailsapi/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  it('should get order detail 1',
    inject([HttpTestingController, OrderdetailsService],
      (mockHttp: HttpTestingController, testService: OrderdetailsService) => {
        // Mock call to HttpContext.
        testService.getOrderDetailByOrderID(2).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(2);
          expect(inData.ordersId).toBe(1);
          expect(inData.sizeId).toBe(3);
          expect(inData.toppingsSelected).toBe('C,D');
          expect(inData.toppingsCount).toBe(2);
          expect(inData.price).toBe(8.99);
          expect(inData.specialRequest).toBe('None');
          expect(inData.orders).toBeNull();
          expect(inData.size).toBeNull();
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/orderdetailsapi/DetailsOfOrder/2');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[1]);
      }));

  it('should post order detail',
    inject([HttpTestingController, OrderdetailsService],
      (mockHttp: HttpTestingController, testService: OrderdetailsService) => {

        let newData: Orderdetail =
        {
          id: 4,
          ordersId: 3,
          sizeId: 1,
          toppingsSelected: 'A,B',
          toppingsCount: 2,
          price: 15.99,
          specialRequest: 'YES',
          orders: null,
          size: null,
        };

        // Mock call to HttpContext.
        testService.postOrderDetail(newData).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.ordersId).toBe(1);
          expect(inData.sizeId).toBe(1);
          expect(inData.toppingsSelected).toBe('A,B,C');
          expect(inData.toppingsCount).toBe(3);
          expect(inData.price).toBe(10.99);
          expect(inData.specialRequest).toBe('None');
          expect(inData.orders).toBeNull();
          expect(inData.size).toBeNull();
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/orderdetailsapi');
        expect(request.request.method).toEqual('POST');

        // Fill request response.
        request.flush(testData[0]);
      }));

  it('should put order detail 1',
    inject([HttpTestingController, OrderdetailsService],
      (mockHttp: HttpTestingController, testService: OrderdetailsService) => {

        // Mock call to HttpContext.
        testService.putOrderDetail(testData[0]).subscribe(inData => {
          // Check response data.
          expect((inData as Orderdetail).id).toBe(1);
          expect((inData as Orderdetail).ordersId).toBe(1);
          expect((inData as Orderdetail).sizeId).toBe(1);
          expect((inData as Orderdetail).toppingsSelected).toBe('A,B,C');
          expect((inData as Orderdetail).toppingsCount).toBe(3);
          expect((inData as Orderdetail).price).toBe(10.99);
          expect((inData as Orderdetail).specialRequest).toBe('None');
          expect((inData as Orderdetail).orders).toBeNull();
          expect((inData as Orderdetail).size).toBeNull();
        });

        // Check request data.
        const request = mockHttp.match((req) => {
          return req.url.match(URL.name + 'api/orderdetailsapi/1') && req.method === 'PUT';
        });
        // Fill request response.
        request[0].flush(testData[0]);
      }));

     

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
