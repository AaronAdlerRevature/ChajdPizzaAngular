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

  newCustomerID:number=-1;
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
      this.customer.stateID = +this.customer.stateID;
      this.customerData.postCustomer(this.customer).subscribe(ret=>{console.log(ret); this.newCustomerID = (ret as Customer).id; if(this.newCustomerID>0){this.isSubmitted=true;} });
    }
  }
}
