import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../data-classes/order';

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
  constructor(private orderData:OrderService) { }

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
      this.orderData.postOrder(this.currentOrder).subscribe(postResponse=>{this.clearOrder(); this.isCreatingOrder=false; this.selectedOrder = (postResponse as Order).id});
    }
  }

  clearOrder(){
    this.currentOrder = null;
    this.allOrders = null;
    this.isCreatingOrder = true;
    this.isViewingOrder = false;
    this.selectedOrder=1;
    this.getAllOrders();
  }

  viewOrder(){
    this.orderData.getOrder(this.selectedOrder).subscribe(inData=>{this.currentOrder = inData; this.isViewingOrder = true});
  }

  updateOrder(){
    if(this.currentOrder){
      this.orderData.updateOrder(this.currentOrder).subscribe(putResponse=>{console.log(putResponse)});
    }
  }
}
