import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Size } from '../size';
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
  return this.client.get<string>(URL.name + 'api/PizzaTypesAPI/sizes/name/' + i);
}

getSizePrice(i:number){
  return this.client.get<number>(URL.name + 'api/PizzaTypesAPI/sizes/price/' + i);
}


}
