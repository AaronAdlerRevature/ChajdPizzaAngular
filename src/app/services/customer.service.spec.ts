import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomerService } from './customer.service';
import { URL } from '../url';
import { Customer } from '../data-classes/customer';

describe('CustomerService', () => {

  let testData: Customer[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        userName: 'John@Doe.Com',
        name: 'John Doe',
        street: '123 A Street',
        city: 'Here',
        stateID: 1,
        state:null,
        zipCode: 12345,
      },
      {
        id: 2,
        userName: 'Mary@Sue.Com',
        name: 'Mary Sue',
        street: '456 B Avenue',
        city: 'There',
        stateID: 2,
        state:null,
        zipCode: 98765,
      },
      {
        id: 1,
        userName: 'Some@One.Com',
        name: 'SomeOne',
        street: '221 Baker Street',
        city: 'Somewhere',
        stateID: 3,
        state:null,
        zipCode: 31337,
      },
    ];
    TestBed.configureTestingModule({
      providers: [CustomerService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, CustomerService],
      (mockHttp: HttpTestingController, testService: CustomerService) => {
        const service: CustomerService = TestBed.get(CustomerService);
        expect(service).toBeTruthy();
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
