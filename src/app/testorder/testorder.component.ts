import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../data-classes/order';
import { format } from 'url';
import { formatDate } from '@angular/common';

import { Orderdetail } from '../data-classes/orderdetail';//
import { OrderdetailsService } from '../services/orderdetails.service';//

@Component({
  selector: 'app-testorder',
  templateUrl: './testorder.component.html',
  styleUrls: ['./testorder.component.scss']
})
export class TestorderComponent implements OnInit {

  allOrders;
  selectedOrder:number;
  isCreatingOrder:boolean=false;
  isViewingOrder:boolean=false;
  currentOrder:Order=null;

  public orderDetails: Orderdetail[] = []; // 

  constructor(private orderData:OrderService, private orderdetailsService: OrderdetailsService) { }

  ngOnInit() {
  this.selectedOrder=1;
  this.currentOrder=null;
  this.isCreatingOrder=false;
  this.isViewingOrder=false;
  this.getAllOrders();
  }

  getAllOrders(){
    this.orderData.getOrders().subscribe(inData=>{this.allOrders=inData});
  }

  createOrder(){
    this.currentOrder = null;
    this.allOrders = null;
    this.isCreatingOrder = true;
    this.isViewingOrder = false;
    this.currentOrder = new Order();
  }

  postOrder(){
    if(this.currentOrder){
      this.currentOrder.timePlaced = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US', '+0500') + 'T' + formatDate(Date.now(), 'hh:mm:ss', 'en-US', '+0500') + '.00';
      console.log(this.currentOrder.timePlaced);
      this.orderData.postOrder(this.currentOrder).subscribe(postResponse=>{this.clearOrder(); this.isCreatingOrder=false; this.selectedOrder = (postResponse as Order).id});
    }
  }

  clearOrder(){
    this.currentOrder = null;
    this.allOrders = null;
    this.isCreatingOrder = false;
    this.isViewingOrder = false;
    this.selectedOrder=1;
    this.getAllOrders();
  }

  viewOrder(){
    this.orderData.getOrder(this.selectedOrder).subscribe(inData=>{this.currentOrder = inData; this.isViewingOrder = true; console.log(inData)});
    this.orDetails(this.selectedOrder);
  }

  updateOrder(){
    if(this.currentOrder){
      this.orderData.updateOrder(this.currentOrder).subscribe(putResponse=>{console.log(putResponse)});
    }
  }

  orDetails(orderId: number){    //
    this.orderdetailsService.getDetailByOrder(orderId).subscribe(details => this.orderDetails = Object.assign([], details)); 
  }

}
