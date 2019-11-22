import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../data-classes/customer';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-testcustomer',
  templateUrl: './testcustomer.component.html',
  styleUrls: ['./testcustomer.component.scss']
})
export class TestcustomerComponent implements OnInit {

  allStates;
  currentCustomer:Customer;
  customerID:number=0;
  constructor(private customerData:CustomerService, private stateData:StatesService) { }

  ngOnInit() {
    this.customerID = 1;
    this.getStates();
  }

  getCustomer(i:number){
    this.customerData.getCustomer(i).subscribe(inData=>{
                                              // this.stateData.getStateName(inData.stateID).subscribe(secondData=>{console.log(secondData); inData.state = secondData});
                                              // console.log(inData.stateID); 
                                              this.currentCustomer = inData;});
  }

  getStateName(i:number){
    this.stateData.getStateName(i).subscribe(inData=>{console.log(inData); this.currentCustomer.state = inData});
  }

  getStates(){
    this.stateData.getStates().subscribe(inData=>{this.allStates = inData;});
  }

  updateCustomer(){
    if(this.currentCustomer){
      this.customerData.putCustomer(this.currentCustomer).subscribe(putResponse=>{console.log(putResponse)});
    }
  }

  clearCustomer(){
    this.currentCustomer=null;
  }
}
