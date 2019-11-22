import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Topping } from "./topping";

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {

  constructor(private client:HttpClient) { }

  getData(){
    return this.client.get('https://chajdpizza.azurewebsites.net/api/PizzaTypesAPI/toppings');
  }

  getToppings(){
    return this.client.get<Topping>('http://localhost:10531/api/PizzaTypesAPI/toppings');
    return this.client.get<Topping>('https://chajdpizza.azurewebsites.net/api/PizzaTypesAPI/toppings');
  }

  getTopping(i:number){
    return this.client.get<Topping>('https://chajdpizza.azurewebsites.net/api/PizzaTypesAPI/toppings/' + i);
  }

  getToppingName(i:number){
    return this.client.get<Topping>('https://chajdpizza.azurewebsites.net/api/PizzaTypesAPI/toppings/name/' + i);
  }
}
