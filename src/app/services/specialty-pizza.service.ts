import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpecialtyPizza } from "../data-classes/specialty-pizza";
import { URL } from '../url';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyPizzaService {

  constructor(private client:HttpClient) { }

  getSpecialPizzas(){
    return this.client.get<SpecialtyPizza[]>(URL.name + 'api/PizzaTypesAPI/special');
  }

  getSpecialPizza(i:number){
    return this.client.get<SpecialtyPizza>(URL.name +'api/PizzaTypesAPI/special/' + i);
  }

  getSpecialPizzaName(i:number){
    return this.client.get(URL.name +'api/PizzaTypesAPI/special/name/' + i, {responseType: 'text'});
  }

  getSpecialPizzaDescription(i:number){
    return this.client.get(URL.name +'api/PizzaTypesAPI/special/desc/' + i, {responseType: 'text'});
  }

  getSpecialPizzaPrice(i:number){
    return this.client.get(URL.name +'api/PizzaTypesAPI/special/price/' + i, {responseType: 'text'});
  }

}
