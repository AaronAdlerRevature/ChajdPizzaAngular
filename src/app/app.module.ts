import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ToppingsComponent } from './toppings/toppings.component';

import { ToppingsService } from "./services/toppings.service";
import { SizesService } from "./services/sizes.service";
import { SpecialtyPizzaService } from "./services/specialty-pizza.service";
import { SFService } from './services/sf.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ToppingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ToppingsService,
    SizesService,
    SpecialtyPizzaService,
    SFService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
