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
        state: null,
        zipCode: 12345,
      },
      {
        id: 2,
        userName: 'Mary@Sue.Com',
        name: 'Mary Sue',
        street: '456 B Avenue',
        city: 'There',
        stateID: 2,
        state: null,
        zipCode: 98765,
      },
      {
        id: 3,
        userName: 'Some@One.Com',
        name: 'SomeOne',
        street: '221 Baker Street',
        city: 'Somewhere',
        stateID: 3,
        state: null,
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

  it('should get all customers',
    inject([HttpTestingController, CustomerService],
      (mockHttp: HttpTestingController, testService: CustomerService) => {
        // Mock call to HttpContext.
        testService.getCustomerList().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].userName).toBe('John@Doe.Com');
          expect(inData[0].name).toBe('John Doe');
          expect(inData[0].street).toBe('123 A Street');
          expect(inData[0].city).toBe('Here');
          expect(inData[0].stateID).toBe(1);
          expect(inData[0].state).toBeNull();
          expect(inData[0].zipCode).toBe(12345);

          expect(inData[1].id).toBe(2);
          expect(inData[1].userName).toBe('Mary@Sue.Com');
          expect(inData[1].name).toBe('Mary Sue');
          expect(inData[1].street).toBe('456 B Avenue');
          expect(inData[1].city).toBe('There');
          expect(inData[1].stateID).toBe(2);
          expect(inData[1].state).toBeNull();
          expect(inData[1].zipCode).toBe(98765);

          expect(inData[2].id).toBe(3);
          expect(inData[2].userName).toBe('Some@One.Com');
          expect(inData[2].name).toBe('SomeOne');
          expect(inData[2].street).toBe('221 Baker Street');
          expect(inData[2].city).toBe('Somewhere');
          expect(inData[2].stateID).toBe(3);
          expect(inData[2].state).toBeNull();
          expect(inData[2].zipCode).toBe(31337);

        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/customersapi');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  it('should get customer 1',
    inject([HttpTestingController, CustomerService],
      (mockHttp: HttpTestingController, testService: CustomerService) => {
        // Mock call to HttpContext.
        testService.getCustomer(1).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.userName).toBe('John@Doe.Com');
          expect(inData.name).toBe('John Doe');
          expect(inData.street).toBe('123 A Street');
          expect(inData.city).toBe('Here');
          expect(inData.stateID).toBe(1);
          expect(inData.state).toBeNull();
          expect(inData.zipCode).toBe(12345);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/customersapi/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  it('should get customer John@Doe.Com',
    inject([HttpTestingController, CustomerService],
      (mockHttp: HttpTestingController, testService: CustomerService) => {
        // Mock call to HttpContext.
        testService.getCustomerByUserName('John@Doe.Com').subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.userName).toBe('John@Doe.Com');
          expect(inData.name).toBe('John Doe');
          expect(inData.street).toBe('123 A Street');
          expect(inData.city).toBe('Here');
          expect(inData.stateID).toBe(1);
          expect(inData.state).toBeNull();
          expect(inData.zipCode).toBe(12345);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/customersapi/byuser/John@Doe.Com');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  it('should post customer',
    inject([HttpTestingController, CustomerService],
      (mockHttp: HttpTestingController, testService: CustomerService) => {

        let newData: Customer =
        {
          id: 4,
          userName: 'No@One.Com',
          name: 'NoOne',
          street: 'Sesame Street',
          city: 'Nowhere',
          stateID: 4,
          state: null,
          zipCode: 11111,
        };

        // Mock call to HttpContext.
        testService.postCustomer(newData).subscribe(inData => {
          // Check response data.
          expect(inData).toBe(4);
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/customersapi/');
        expect(request.request.method).toEqual('POST');

        // Fill request response.
        request.flush(4);
      }));

  it('should put customer 1',
    inject([HttpTestingController, CustomerService],
      (mockHttp: HttpTestingController, testService: CustomerService) => {
        // Mock call to HttpContext.
        testService.putCustomer(testData[0]).subscribe(inData => {
          // Check response data.
          expect((inData as Customer).id).toBe(1);
          expect((inData as Customer).userName).toBe('John@Doe.Com');
          expect((inData as Customer).name).toBe('John Doe');
          expect((inData as Customer).street).toBe('123 A Street');
          expect((inData as Customer).city).toBe('Here');
          expect((inData as Customer).stateID).toBe(1);
          expect((inData as Customer).state).toBeNull();
          expect((inData as Customer).zipCode).toBe(12345);
        });

        // Check request data.
        const request = mockHttp.match((req) => {
          return req.url.match(URL.name + 'api/customersapi/1') && req.method === 'PUT';
        });
        // Fill request response.
        request[0].flush(testData[0]);
      }));

  it('should delete customer 1',
    inject([HttpTestingController, CustomerService],
      (mockHttp: HttpTestingController, testService: CustomerService) => {
        // Mock call to HttpContext.
        testService.deleteCustomer(testData[0]).subscribe(inData => {
          expect(inData).toBeNull();
        });

        // Check request data.
        const request = mockHttp.match((req) => {
          return req.url.match(URL.name + 'api/customersapi/1') && req.method === 'DELETE';
        });
        // Fill request response.
        request[0].flush(null);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
