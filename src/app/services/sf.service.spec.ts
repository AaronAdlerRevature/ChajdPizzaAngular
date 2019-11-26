import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { SFService } from './sf.service';
import { URL } from '../url';
import { SF } from '../data-classes/sf';

describe('SFService', () => {

  let testData: SF[];

  beforeEach(() => {
    testData = [
      {
        id: 1,
        price: 1.50,
      },
      {
        id: 2,
        price: 3.00,
      },
    ];
    TestBed.configureTestingModule({
      providers: [SFService],
      imports: [HttpClientTestingModule],
    })
  });

  it('should be created',
    inject([HttpTestingController, SFService],
      (mockHttp: HttpTestingController, testService: SFService) => {
        const service: SFService = TestBed.get(SFService);
        expect(service).toBeTruthy();
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
