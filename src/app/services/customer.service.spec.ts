import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ CustomerService ],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, CustomerService], (mockHttp: HttpTestingController, testService:CustomerService) => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
