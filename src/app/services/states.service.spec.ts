import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { StatesService } from './states.service';
import { URL } from '../url';
import { State } from '../data-classes/state';

describe('StatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [StatesService],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', 
    inject([HttpTestingController, StatesService], 
          (mockHttp: HttpTestingController, testService:StatesService) => {
    const service: StatesService = TestBed.get(StatesService);
    expect(service).toBeTruthy();
  }));


  it('should get all states', 
  inject([HttpTestingController, StatesService], 
        (mockHttp: HttpTestingController, testService:StatesService) => {
          const testData:State[] = [
            {
              id : 1,
              name : 'Florida',
              abbreviation : 'FL',
            },

            {
              id : 2,
              name : 'Texas',
              abbreviation : 'TX',
            },
            
            {
              id : 3,
              name : 'Virginia',
              abbreviation : 'VA',
            },
            
          ];

  testService.getStates().subscribe(inData=>{
    expect(inData[0].id).toBe(1);
    expect(inData[0].name).toBe('Florida');
    expect(inData[0].abbreviation).toBe('FL');

    expect(inData[1].id).toBe(2);
    expect(inData[1].name).toBe('Texas');
    expect(inData[1].abbreviation).toBe('TX');
  });

  const request = mockHttp.expectOne(URL.name + 'api/stateapi');
  expect(request.request.method).toEqual('GET');

  request.flush(testData);
}));


  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
