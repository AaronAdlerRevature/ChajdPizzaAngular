import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Customer } from '../data-classes/customer';
import { URL } from '../url';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client:HttpClient) { }

  getCustomerList(){
    return this.client.get<Customer>(URL.name + 'api/customersapi');
  }

  getCustomer(i:number){
    return this.client.get<Customer>(URL.name + 'api/customersapi/' + i);
  }

  getCustomerByUserName(name:string){
    return this.client.get<Customer>(URL.name + 'api/customersapi/byuser/' + name);
  }

  postCustomer(c:Customer){
    c.stateID = +c.stateID;
    return this.client.post(URL.name + 'api/customersapi/', c);
  }

  putCustomer(c:Customer){
    c.stateID = +c.stateID;
    return this.client.put(URL.name + 'api/customersapi/' + c.id, c);
  }

  deleteCustomer(c:Customer){
    c.stateID = +c.stateID;
    return this.client.delete(URL.name +'api/customersapi/' + c.id);
  }
}
