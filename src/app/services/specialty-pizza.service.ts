import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpecialtyPizza } from "../specialty-pizza";
import { URL } from '../url';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyPizzaService {

  constructor(private client:HttpClient) { }

  getSpecialPizzas(){
    return this.client.get<SpecialtyPizza>(URL.name + 'api/PizzaTypesAPI/special');
  }

  getSpecialPizza(i:number){
    return this.client.get<SpecialtyPizza>(URL.name +'api/PizzaTypesAPI/special/' + i);
  }

  getSpecialPizzaName(i:number){
    return this.client.get<string>(URL.name +'api/PizzaTypesAPI/special/name/' + i);
  }

  getSpecialPizzaDescription(i:number){
    return this.client.get<string>(URL.name +'api/PizzaTypesAPI/special/desc/' + i);
  }

  getSpecialPizzaPrice(i:number){
    return this.client.get<number>(URL.name +'api/PizzaTypesAPI/special/price/' + i);
  }

}
