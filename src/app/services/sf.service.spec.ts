import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { SFService } from './sf.service';

describe('SFService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ SFService ],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, SFService], (mockHttp: HttpTestingController, testService:SFService) => {
    const service: SFService = TestBed.get(SFService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
