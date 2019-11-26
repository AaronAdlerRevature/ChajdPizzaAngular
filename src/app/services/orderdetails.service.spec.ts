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

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
