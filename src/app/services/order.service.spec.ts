import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { OrderService } from './order.service';
import { URL } from '../url';
import { Order } from '../data-classes/order';

describe('OrderService', () => {

  let testData: Order[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        customerId: 1,
        netPrice: 5.99,
        isCompleted: true,
        timePlaced: '',
        deliveryAddress: 'Here',
        customer: null,
        orderDetails: null,
      },
      {
        id: 2,
        customerId: 1,
        netPrice: 7.99,
        isCompleted: false,
        timePlaced: '',
        deliveryAddress: 'Here',
        customer: null,
        orderDetails: null,
      },
      {
        id: 3,
        customerId: 2,
        netPrice: 9.99,
        isCompleted: false,
        timePlaced: '',
        deliveryAddress: 'There',
        customer: null,
        orderDetails: null,
      },
    ];

    TestBed.configureTestingModule({
      providers: [OrderService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, OrderService],
      (mockHttp: HttpTestingController, testService: OrderService) => {
        const service: OrderService = TestBed.get(OrderService);
        expect(service).toBeTruthy();
      }));

  it('should get all orders',
    inject([HttpTestingController, OrderService],
      (mockHttp: HttpTestingController, testService: OrderService) => {
        // Mock call to HttpContext.
        testService.getOrders().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].customerId).toBe(1);
          expect(inData[0].netPrice).toBe(5.99);
          expect(inData[0].isCompleted).toBe(true);
          expect(inData[0].timePlaced).toBe('');
          expect(inData[0].deliveryAddress).toBe('Here');
          expect(inData[0].customer).toBeNull();
          expect(inData[0].orderDetails).toBeNull();

          expect(inData[1].id).toBe(2);
          expect(inData[1].customerId).toBe(1);
          expect(inData[1].netPrice).toBe(7.99);
          expect(inData[1].isCompleted).toBe(false);
          expect(inData[1].timePlaced).toBe('');
          expect(inData[1].deliveryAddress).toBe('Here');
          expect(inData[1].customer).toBeNull();
          expect(inData[1].orderDetails).toBeNull();

          expect(inData[2].id).toBe(3);
          expect(inData[2].customerId).toBe(2);
          expect(inData[2].netPrice).toBe(9.99);
          expect(inData[2].isCompleted).toBe(false);
          expect(inData[2].timePlaced).toBe('');
          expect(inData[2].deliveryAddress).toBe('There');
          expect(inData[2].customer).toBeNull();
          expect(inData[2].orderDetails).toBeNull();

        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/ordersapi');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  it('should get order 1',
    inject([HttpTestingController, OrderService],
      (mockHttp: HttpTestingController, testService: OrderService) => {
        // Mock call to HttpContext.
        testService.getOrder(1).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.customerId).toBe(1);
          expect(inData.netPrice).toBe(5.99);
          expect(inData.isCompleted).toBe(true);
          expect(inData.timePlaced).toBe('');
          expect(inData.deliveryAddress).toBe('Here');
          expect(inData.customer).toBeNull();
          expect(inData.orderDetails).toBeNull();
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/ordersapi/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  it('should get order 3 by customer ID',
    inject([HttpTestingController, OrderService],
      (mockHttp: HttpTestingController, testService: OrderService) => {
        // Mock call to HttpContext.
        testService.getOrderByCustomerID(2).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(3);
          expect(inData.customerId).toBe(2);
          expect(inData.netPrice).toBe(9.99);
          expect(inData.isCompleted).toBe(false);
          expect(inData.timePlaced).toBe('');
          expect(inData.deliveryAddress).toBe('There');
          expect(inData.customer).toBeNull();
          expect(inData.orderDetails).toBeNull();
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/ordersapi/bycust/2');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[2]);
      }));

  it('should check multiple orders open for customer 1',
    inject([HttpTestingController, OrderService],
      (mockHttp: HttpTestingController, testService: OrderService) => {
        // Mock call to HttpContext.
        testService.checkMultipleOrdersOpen(1).subscribe(inData => {
          // Check response data.
          expect(+inData).toBe(1);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/ordersapi/checkmultbycust/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(1);
      }));

  it('should post order',
    inject([HttpTestingController, OrderService],
      (mockHttp: HttpTestingController, testService: OrderService) => {

        let newData: Order =
        {
          id: 4,
          customerId: 3,
          netPrice: 19.99,
          isCompleted: false,
          timePlaced: '',
          deliveryAddress: 'Somewhere',
          customer: null,
          orderDetails: null,
        };

        // Mock call to HttpContext.
        testService.postOrder(newData).subscribe(inData => {
          // Check response data.
          expect(inData).toBe(4);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/ordersapi/');
        expect(request.request.method).toEqual('POST');

        // Fill request response.
        request.flush(4);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
