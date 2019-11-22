import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { State } from '../data-classes/state';
import { URL } from '../url';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private client:HttpClient) { }

  getStates(){
    return this.client.get<State>(URL.name + 'api/stateapi');
  }

  getState(i:number){
    return this.client.get<State>(URL.name + 'api/stateapi/' + i);
  }

  getStateName(i:number){
    return this.client.get<string>(URL.name + 'api/stateapi/name/' + i);
  }

  getStateAbbreviation(i:number){
    return this.client.get<string>(URL.name + 'api/stateapi/abbr/' + i);
  }
}
