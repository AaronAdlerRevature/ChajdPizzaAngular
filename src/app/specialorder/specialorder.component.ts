import { Component, OnInit } from '@angular/core';
import { SpecialtyPizza } from '../data-classes/specialty-pizza';
import { SpecialtyPizzaService } from '../services/specialty-pizza.service';

@Component({
  selector: 'app-specialorder',
  templateUrl: './specialorder.component.html',
  styleUrls: ['./specialorder.component.scss']
})
export class SpecialorderComponent implements OnInit {

  constructor(private specialData: SpecialtyPizzaService) {}
  pizzasGrab: SpecialtyPizza[] = [];

  ngOnInit() {
    this.specialData.getSpecialPizzas().subscribe(
      result => {
      result.forEach(element => {
        this.pizzasGrab.push(element);
      });
    }
    );
  }

}
