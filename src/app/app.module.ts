import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ToppingsComponent } from './toppings/toppings.component';

import { ToppingsService } from "./services/toppings.service";
import { SizesService } from "./services/sizes.service";
import { SpecialtyPizzaService } from "./services/specialty-pizza.service";
import { SFService } from './services/sf.service';
import { CustomerService } from './services/customer.service';
import { TestcustomerComponent } from './testcustomer/testcustomer.component';
import { SpecialorderComponent } from './specialorder/specialorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ToppingsComponent,
    TestcustomerComponent,
    SpecOrderComponent,
    SpecialorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ToppingsService,
    SizesService,
    SpecialtyPizzaService,
    SFService,
    CustomerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
