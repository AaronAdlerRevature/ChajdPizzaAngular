import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { StatesService } from './states.service';
import { URL } from '../url';
import { State } from '../data-classes/state';

describe('StatesService', () => {

  let testData:State[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatesService],
      imports: [HttpClientTestingModule],
    });
    testData = [
      {
        id: 1,
        name: 'Florida',
        abbreviation: 'FL',
      },
      {
        id: 2,
        name: 'Texas',
        abbreviation: 'TX',
      },
      {
        id: 3,
        name: 'Virginia',
        abbreviation: 'VA',
      },
    ];
  });

  it('should be created',
    inject([HttpTestingController, StatesService],
      (mockHttp: HttpTestingController, testService: StatesService) => {
        const service: StatesService = TestBed.get(StatesService);
        expect(service).toBeTruthy();
      }));


  it('should get all states',
    inject([HttpTestingController, StatesService],
      (mockHttp: HttpTestingController, testService: StatesService) => {
        // Mock call to HttpContext.
        testService.getStates().subscribe(inData => {
          // Check response data.
          expect(inData[0].id).toBe(1);
          expect(inData[0].name).toBe('Florida');
          expect(inData[0].abbreviation).toBe('FL');

          expect(inData[1].id).toBe(2);
          expect(inData[1].name).toBe('Texas');
          expect(inData[1].abbreviation).toBe('TX');

          expect(inData[2].id).toBe(3);
          expect(inData[2].name).toBe('Virginia');
          expect(inData[2].abbreviation).toBe('VA');
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/stateapi');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData);
      }));

  it('should get state 1',
    inject([HttpTestingController, StatesService],
      (mockHttp: HttpTestingController, testService: StatesService) => {
        // Mock call to HttpContext.
        testService.getState(1).subscribe(inData => {
          // Check response data.
          expect(inData.id).toBe(1);
          expect(inData.name).toBe('Florida');
          expect(inData.abbreviation).toBe('FL');
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/stateapi/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0]);
      }));

  it('should get state name 1',
    inject([HttpTestingController, StatesService],
      (mockHttp: HttpTestingController, testService: StatesService) => {
        // Mock call to HttpContext.
        testService.getStateName(1).subscribe(inData => {
          // Check response data.
          expect(inData).toBe('Florida');
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/stateapi/name/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0].name);
      }));

  it('should get state abbreviation 1',
    inject([HttpTestingController, StatesService],
      (mockHttp: HttpTestingController, testService: StatesService) => {
        // Mock call to HttpContext.
        testService.getStateAbbreviation(1).subscribe(inData => {
          // Check response data.
          expect(inData).toBe('FL');
        });

        // Check request data.
        const request = mockHttp.expectOne(URL.name + 'api/stateapi/abbr/1');
        expect(request.request.method).toEqual('GET');

        // Fill request response.
        request.flush(testData[0].abbreviation);
      }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
