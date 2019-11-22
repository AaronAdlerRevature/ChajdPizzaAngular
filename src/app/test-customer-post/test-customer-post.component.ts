import { Component, OnInit } from '@angular/core';
import { StatesService } from '../services/states.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../data-classes/customer';

@Component({
  selector: 'app-test-customer-post',
  templateUrl: './test-customer-post.component.html',
  styleUrls: ['./test-customer-post.component.scss']
})
export class TestCustomerPostComponent implements OnInit {

  allStates;

  customer:Customer;
  constructor(private customerData:CustomerService, private stateData:StatesService) { }

  postResult;
  isSubmitted:boolean=false;

  ngOnInit() {
    this.customer = new Customer();
    console.log(this.customer);
    this.getStates();
  }

  getStates(){
    this.stateData.getStates().subscribe(inData=>{this.allStates = inData;});
  }

  postCustomer(){
    if(this.customer){
      console.log(this.customer);
      this.customer.stateId = +this.customer.stateId;
      this.customerData.postCustomer(this.customer).subscribe(ret=>{console.log(ret);});
    }
  }
}
