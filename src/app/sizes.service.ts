import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Size } from './size';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  constructor(private client:HttpClient) { }

getSizes(){
  return this.client.get('http://localhost:10531/api/PizzaTypesAPI/sizes');
}

}
