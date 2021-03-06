import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SF } from '../data-classes/sf';
import { URL } from '../url';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SFService {

  constructor(private client:HttpClient) { }

  getSFs(){
    return this.client.get<SF>(URL.name + 'api/PizzaTypesAPI/sf');
  }
  
  getSF(i:number){
    return this.client.get<SF>(URL.name + 'api/PizzaTypesAPI/sf/' + i);
  }

  getSFPrice(i:number){
    return this.client.get(URL.name + 'api/PizzaTypesAPI/sf/price/' + i, {responseType: 'text'});
  }
}
