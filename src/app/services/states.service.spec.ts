import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { StatesService } from './states.service';

describe('StatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [StatesService],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, StatesService], (mockHttp: HttpTestingController, testService:StatesService) => {
    const service: StatesService = TestBed.get(StatesService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
