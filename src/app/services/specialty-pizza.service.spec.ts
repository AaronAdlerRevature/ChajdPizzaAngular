import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing'

import { SpecialtyPizzaService } from './specialty-pizza.service';

describe('SpecialtyPizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ SpecialtyPizzaService ],
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', inject([HttpTestingController, SpecialtyPizzaService], (mockHttp: HttpTestingController, testService:SpecialtyPizzaService) => {
    const service: SpecialtyPizzaService = TestBed.get(SpecialtyPizzaService);
    expect(service).toBeTruthy();
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
