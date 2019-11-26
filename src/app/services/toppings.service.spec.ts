import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { ToppingsService } from './toppings.service';

describe('ToppingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ToppingsService],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, ToppingsService], (mockHttp: HttpTestingController, testService:ToppingsService) => {
    const service: ToppingsService = TestBed.get(ToppingsService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
