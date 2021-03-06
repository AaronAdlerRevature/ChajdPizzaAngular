import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  deals = [
    {
      imageLink: "./assets/image/bch.jpg",
      routeLink: "./test",
      text: "BCH",
      desc: "Grilled chicken breast, BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella.",
      title: "BCH",
    },
    
    {
      imageLink: "./assets/image/meate.jpg",
      routeLink: "",
      text: "MEATE",
      desc: "Creamy Alfredo sauce, fresh spinach, fresh provolone and cheese made with 100% real mozzarella.",
      title: "Meat Lover",
    },
    
    {
      imageLink: "./assets/image/pep.jpg",
      routeLink: "",
      text: "PEP",
      desc: "Creamy Alfredo sauce, fresh spinach, fresh provolone and cheese made with 100% real mozzarella.",
      title: "Pepperoni",
    },
    
    {
      imageLink: "./assets/image/veggi.jpg",
      routeLink: "",
      text: "VEGGI",
      desc: "Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives.",
      title: "Veggi",
    },
    
    {
      imageLink: "./assets/image/ches.jpg",
      routeLink: "",
      text: "CHES",
      desc: "Creamy Alfredo sauce, fresh spinach, fresh provolone and cheese made with 100% real mozzarella.",
      title: "Cheese Lover",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
