import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { URL } from "../url";
import { Order } from '../data-classes/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private client:HttpClient) { }

  getOrders(){
    return this.client.get<Order>(URL.name + 'api/ordersapi');
  }

  getOrder(i:number){
    return this.client.get<Order>(URL.name + 'api/ordersapi/' + i);
  }

  getOrderByCustomerID(i:number){
    return this.client.get(URL.name + 'api/ordersapi/bycust/' + i);
  }

  checkMultipleOrdersOpen(i:number){
    return this.client.get(URL.name + 'api/ordersapi/checkmultbycust/' + i, {responseType: 'text'});
  }

  postOrder(o:Order){
    return this.client.post(URL.name + 'api/ordersapi/', o);
  }

  updateOrder(o:Order){
    return this.client.put(URL.name + 'api/ordersapi/' + o.id, o);
  }

  deleteOrder(o:Order){
    return this.client.delete(URL.name + 'api/ordersapi/' + o.id);
  }
}
