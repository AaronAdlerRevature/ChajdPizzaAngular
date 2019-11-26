import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { OrderdetailsService } from './orderdetails.service';

describe('OrderdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ OrderdetailsService ],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, OrderdetailsService], (mockHttp: HttpTestingController, testService:OrderdetailsService) => {
    const service: OrderdetailsService = TestBed.get(OrderdetailsService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
