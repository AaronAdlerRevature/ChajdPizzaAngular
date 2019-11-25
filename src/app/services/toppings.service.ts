import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Topping } from "../data-classes/topping";
import { URL } from '../url';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {

  constructor(private client:HttpClient) { }

  getData(){
    return this.client.get(URL.name + 'api/PizzaTypesAPI/toppings');
  }

  getToppings(){
    return this.client.get<Topping>(URL.name + 'api/PizzaTypesAPI/toppings');
  }

  getTopping(i:number){
    return this.client.get<Topping>(URL.name + 'api/PizzaTypesAPI/toppings/' + i);
  }

  getToppingName(i:number){
    return this.client.get<Topping>(URL.name + 'api/PizzaTypesAPI/toppings/name/' + i);
  }
}
