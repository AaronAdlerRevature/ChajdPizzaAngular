import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpecialtyPizza } from "./specialty-pizza";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyPizzaService {

  constructor(private client:HttpClient) { }

  getSpecialPizzas(){
    return this.client.get<SpecialtyPizza>('http://localhost:10531/api/PizzaTypesAPI/special');
  }

  getSpecialPizza(i:number){
    return this.client.get<SpecialtyPizza>('http://localhost:10531/api/PizzaTypesAPI/special/' + i);
  }

  getSpecialPizzaName(i:number){
    return this.client.get<string>('http://localhost:10531/api/PizzaTypesAPI/special/name/' + i);
  }

  getSpecialPizzaDescription(i:number){
    return this.client.get<string>('http://localhost:10531/api/PizzaTypesAPI/special/desc/' + i);
  }

  getSpecialPizzaPrice(i:number){
    return this.client.get<number>('http://localhost:10531/api/PizzaTypesAPI/special/price/' + i);
  }

}
