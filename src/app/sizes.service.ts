import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Size } from './size';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  constructor(private client:HttpClient) { }

getSizes(){
  return this.client.get<Size>('http://localhost:10531/api/PizzaTypesAPI/sizes');
}

getSize(i:number){
  return this.client.get<Size>('http://localhost:10531/api/PizzaTypesAPI/sizes/' + i);
}

getSizeName(i:number){
  return this.client.get<Size>('http://localhost:10531/api/PizzaTypesAPI/sizes/name/' + i);
}

getSizePrice(i:number){
  return this.client.get<Size>('http://localhost:10531/api/PizzaTypesAPI/sizes/price/' + i);
}


}
