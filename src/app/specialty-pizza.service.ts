import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SpecialtyPizza } from "./specialty-pizza";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyPizzaService {

  constructor(private client:HttpClient) { }
}
