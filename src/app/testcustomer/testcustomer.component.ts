import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../data-classes/customer';

@Component({
  selector: 'app-testcustomer',
  templateUrl: './testcustomer.component.html',
  styleUrls: ['./testcustomer.component.scss']
})
export class TestcustomerComponent implements OnInit {

  currentCustomer:Customer;
  customerID:number=0;
  constructor(private customerData:CustomerService) { }

  ngOnInit() {
    this.customerID = 1;
  }

  getCustomer(i:number){
    this.customerData.getCustomer(i).subscribe(inData=>{console.log(inData); this.currentCustomer = inData;});
  }

}
