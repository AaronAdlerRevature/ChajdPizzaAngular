import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SF } from './sf';

@Injectable({
  providedIn: 'root'
})
export class SFService {

  constructor(private client:HttpClient) { }

  getSFs(){
    return this.client.get<SF>('http://localhost:10531/api/PizzaTypesAPI/sf');
  }
  
  getSF(i:number){
    return this.client.get<SF>('http://localhost:10531/api/PizzaTypesAPI/sf/' + i);
  }

  getSFPrice(i:number){
    return this.client.get<number>('http://localhost:10531/api/PizzaTypesAPI/sf/price/' + i);
  }
}
