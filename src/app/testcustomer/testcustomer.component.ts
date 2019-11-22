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

  currentCustomer:Customer;
  customerID:number=0;
  constructor(private customerData:CustomerService, private stateData:StatesService) { }

  ngOnInit() {
    this.customerID = 1;
  }

  getCustomer(i:number){
    this.customerData.getCustomer(i).subscribe(inData=>{
                                              this.stateData.getStateName(inData.stateId).subscribe(secondData=>{console.log(secondData); inData.state = secondData});
                                              console.log(inData); 
                                              console.log(inData.city); 
                                              console.log(inData.userName); 
                                              console.log(inData.state); 
                                              this.currentCustomer = inData;});
  }

  getStateName(i:number){
    this.stateData.getStateName(i).subscribe(inData=>{console.log(inData); this.currentCustomer.state = inData});
  }
}
