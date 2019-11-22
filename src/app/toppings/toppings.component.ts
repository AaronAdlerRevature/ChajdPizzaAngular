import { Component, OnInit } from '@angular/core';

import { ToppingsService } from "../toppings.service";
import { SizesService } from "../sizes.service";
import { SpecialtyPizzaService } from '../specialty-pizza.service';

import { Topping } from '../topping';
import { Size } from '../size';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent implements OnInit {

  allToppings;
  allSizes;

  currentToppings:string[];
  toppingCount:number = 0;
  toppingPrice:number = 0;
  
  constToppingPrice:number = 1.5;

  selectedSize:number = 1;
  sizePrice:number = 0;

  totalPrice:number = 0;

  constructor(private topData:ToppingsService,
              private sizeData:SizesService,
              private specialPizzaData:SpecialtyPizzaService) { }


  sampleSize:Size;

  sampleTopping:Topping;

  ngOnInit() {
    this.toppingCount=0;
    this.currentToppings = [];

    this.getToppings();
    this.getSizes();  

    //console.log(this.allSizes[0]);
    //this.updateSize(1,0);

    this.getSize(2);
    this.getTopping(5);
  }

  getToppings(){
    this.topData.getToppings().subscribe(inData=>{ /*console.log(inData)*/; this.allToppings = inData; /*console.log(this.allToppings[0])*/});
  }
  
  getSizes(){
    this.sizeData.getSizes().subscribe(inData=>{ /*console.log(inData)*/; this.allSizes = inData; /*console.log(this.allSizes[0])*/; this.sizePrice=this.allSizes[this.selectedSize-1].s_Price; this.calculateNewPrice()});
  }

  getSize(i:number){
    this.sizeData.getSize(i).subscribe(inData=>{console.log('Size '+i+':'); console.log(inData);  this.sampleSize = inData });
  }

  getTopping(i:number){
    this.topData.getTopping(i).subscribe(inData=>{console.log('Topping '+i+':'); console.log(inData); this.sampleTopping=inData});
  }
  
  updateSize(size:number, i:number){
    this.selectedSize = size;
    this.sizePrice = this.allSizes[i].s_Price;

    this.calculateNewPrice();
  }
  
  updateTopping(element, top){
    
    //console.log(element);
    //console.log(top);
    if (element.target.checked){
      let i:number = this.currentToppings.indexOf(top);
      if (i === -1){
        this.currentToppings.push(top);
        ++this.toppingCount;
        this.toppingPrice += this.constToppingPrice;
      }
    }else{
      let i:number = this.currentToppings.indexOf(top);
      if (i !== -1){
        this.currentToppings.splice(i,1);
        --this.toppingCount;
        this.toppingPrice -= this.constToppingPrice;
      }
      
    }
    
    console.log(this.currentToppings);
    console.log(this.toppingCount);
    this.calculateNewPrice();
  }
  
  calculateNewPrice(){
    this.totalPrice = this.toppingPrice + this.sizePrice;
  }
}
