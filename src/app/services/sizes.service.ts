import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Size } from '../data-classes/size';
import { URL } from '../url';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  constructor(private client:HttpClient) { }

getSizes(){
  return this.client.get<Size>(URL.name + 'api/PizzaTypesAPI/sizes');
}

getSize(i:number){
  return this.client.get<Size>(URL.name + 'api/PizzaTypesAPI/sizes/' + i);
}

getSizeName(i:number){
  return this.client.get(URL.name + 'api/PizzaTypesAPI/sizes/name/' + i, {responseType: 'text'});
}

getSizePrice(i:number){
  return this.client.get(URL.name + 'api/PizzaTypesAPI/sizes/price/' + i, {responseType: 'text'});
}


}
