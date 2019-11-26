import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SpecialorderComponent } from './specialorder/specialorder.component';

import { ToppingsComponent } from './toppings/toppings.component';
import { TestcustomerComponent } from './testcustomer/testcustomer.component';
import { TestCustomerPostComponent } from './test-customer-post/test-customer-post.component';
import { TestorderComponent } from './testorder/testorder.component';

import { ToppingsService } from "./services/toppings.service";
import { SizesService } from "./services/sizes.service";
import { SpecialtyPizzaService } from "./services/specialty-pizza.service";
import { SFService } from './services/sf.service';
import { CustomerService } from './services/customer.service';
import { OrderService } from './services/order.service';
import { OrderdetailsService } from './services/orderdetails.service';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ToppingsComponent,
    TestcustomerComponent,
    TestCustomerPostComponent,
    SpecialorderComponent,
    TestorderComponent,
    OrderdetailComponent,
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
    OrderService,
    OrderdetailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
