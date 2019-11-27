import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { URL } from "../url";
import { Orderdetail } from '../data-classes/orderdetail';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor(private client:HttpClient) { }

  getOrderDetails(){
    return this.client.get<Orderdetail>(URL.name +'api/orderdetailsapi/');
  }

  getOrderDetail(i:number){
    return this.client.get<Orderdetail>(URL.name +'api/orderdetailsapi/' + i);
  }
  
  getDetailByOrder(i:number){
    return this.client.get<Orderdetail>(URL.name +'api/orderdetailsapi/DetailsOfOrder/'+i);
  }

  getOrderDetailByOrderID(i:number){
    return this.client.get<Orderdetail>(URL.name +'api/orderdetailsapi/DetailsOfOrder/' + i);
  }

  postOrderDetail(od:Orderdetail){
    return this.client.post<Orderdetail>(URL.name + 'api/orderdetailsapi', od);
  }

  putOrderDetail(od:Orderdetail){
    return this.client.put(URL.name + 'api/orderdetailsapi/' + od.id, od);
  }

  deleteOrderDetail(od:Orderdetail){
    return this.client.delete(URL.name + 'api/orderdetailsapi/' + od.id);
  }
}