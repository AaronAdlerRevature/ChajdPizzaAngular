import { Component, OnInit } from '@angular/core';
import { SpecialtyPizza } from '../data-classes/specialty-pizza';
import { OrderdetailsService } from '../services/orderdetails.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss']
})
export class OrderdetailComponent implements OnInit {

  constructor(private orderdetailsService: OrderdetailsService) { }

  ngOnInit() {
    this.test();
  }

  test(){
    this.orderdetailsService.getDetailByOrder(4).subscribe(data => {
      console.log(data);
    });
  }
}
/*

*/