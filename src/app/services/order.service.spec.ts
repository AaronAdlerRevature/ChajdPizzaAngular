import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ OrderService ],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, OrderService], (mockHttp: HttpTestingController, testService:OrderService) => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
