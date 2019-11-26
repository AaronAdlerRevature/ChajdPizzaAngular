import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { SizesService } from './sizes.service';
import { URL } from '../url';
import { Size } from '../data-classes/size';

describe('SizesService', () => {

  let testData:Size[];

  beforeEach(() =>{
    testData = [
      {
        id: 1,
        baseSize: 'Small', 
        s_Price: 3.99,
      },
      {
        id: 2,
        baseSize: 'Medium',
        s_Price: 4.99,
      },
      {
        id: 3,
        baseSize: 'Large',
        s_Price: 5.99,
      },
    ];
   TestBed.configureTestingModule({
    providers: [ SizesService ],
    imports: [ HttpClientTestingModule ],
  })});

  it('should be created', inject([HttpTestingController, SizesService], (mockHttp: HttpTestingController, testService:SizesService) => {
    const service: SizesService = TestBed.get(SizesService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
