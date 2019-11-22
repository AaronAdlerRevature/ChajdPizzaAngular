import { Component, OnInit } from '@angular/core';

import { ToppingsService } from "../services/toppings.service";
import { SizesService } from "../services/sizes.service";
import { SpecialtyPizzaService } from '../services/specialty-pizza.service';

import { Topping } from '../data-classes/topping';
import { Size } from '../data-classes/size';
import { SpecialtyPizza } from '../data-classes/specialty-pizza';
import { SFService } from '../services/sf.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent implements OnInit {

  allToppings;
  allSizes;
  allSpecialPizza;

  currentToppings:string[];
  toppingCount:number = 0;
  toppingPrice:number = 0;
  
  selectedSize:number = 1;
  sizePrice:number = 0;

  totalPrice:number = 0;

  constructor(private topData:ToppingsService,
              private sizeData:SizesService,
              private specialPizzaData:SpecialtyPizzaService,
              private sfData:SFService) { }


  sampleSize:Size;

  sampleTopping:Topping;

  sampleSpecialPizza:SpecialtyPizza;

  specialFormula:number;

  ngOnInit() {
    this.toppingCount=0;
    this.currentToppings = [];

    this.getSF(1);

    this.getToppings();
    this.getSizes();  
    this.getSpecialPizzas();

    this.getSize(2);
    this.getTopping(5);
    this.getSpecialPizza(4);
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
  
  getSpecialPizzas(){
    this.specialPizzaData.getSpecialPizzas().subscribe(inData=>{console.log(inData); this.allSpecialPizza = inData; /*console.log(this.allSpecialPizza[0]);*/});
  }

  getSpecialPizza(i:number){
    this.specialPizzaData.getSpecialPizza(i).subscribe(inData=>{console.log('Special Pizza'+i+':');console.log(inData); this.sampleSpecialPizza = inData; /*console.log(this.allSpecialPizza[0]);*/});
  }

  getSF(i:number){
    this.sfData.getSFPrice(i).subscribe(inData=>{console.log('SF :'+inData); this.specialFormula = inData;})
  }

//#region PRICE CALCULATIONS

// Price calculations.
updateSize(size:number, i:number){
  this.selectedSize = size;
  this.sizePrice = this.allSizes[i].s_Price;
  
  this.calculateNewPrice();
}

updateTopping(element, top){
  
  if (element.target.checked){
    let i:number = this.currentToppings.indexOf(top);
    if (i === -1){
      this.currentToppings.push(top);
      ++this.toppingCount;
      this.toppingPrice += this.specialFormula;
    }
  }else{
    let i:number = this.currentToppings.indexOf(top);
    if (i !== -1){
        this.currentToppings.splice(i,1);
        --this.toppingCount;
        this.toppingPrice -= this.specialFormula;
      }
    }
    
    console.log(this.currentToppings);
    console.log(this.toppingCount);
    this.calculateNewPrice();
  }
  
  calculateNewPrice(){
    this.totalPrice = this.toppingPrice + this.sizePrice;
  }
  //#endregion
}
