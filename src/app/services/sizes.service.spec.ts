import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { SizesService } from './sizes.service';

describe('SizesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ SizesService ],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, SizesService], (mockHttp: HttpTestingController, testService:SizesService) => {
    const service: SizesService = TestBed.get(SizesService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
