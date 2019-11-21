import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  currentDisplay = null;
  deals = [
    {
      imageLink: "./assets/image/bch.jpg",
      routeLink: "",
      text: "BCH",
    },

    {
      imageLink: "./assets/image/meate.jpg",
      routeLink: "",
      text: "MEATE",
    },

    {
      imageLink: "./assets/image/pep.jpg",
      routeLink: "",
      text: "PEP",
    },

    {
      imageLink: "./assets/image/veggi.jpg",
      routeLink: "",
      text: "VEGGI",
    },

    {
      imageLink: "./assets/image/ches.jpg",
      routeLink: "",
      text: "CHES",
    },
  ]
  
  ngOnInit() {
    this.currentDisplay = this.deals[0];
  }

}
