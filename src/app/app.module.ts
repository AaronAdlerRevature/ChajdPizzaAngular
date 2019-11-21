import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ToppingsComponent } from './toppings/toppings.component';

import { ToppingsService } from "./toppings.service";
import { SizesService } from "./sizes.service";

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
  providers: [ToppingsService,SizesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
