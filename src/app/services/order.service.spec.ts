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
        isCompleted: true,
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

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
