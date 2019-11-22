import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { ToppingsComponent  } from "./toppings/toppings.component";
import { TestcustomerComponent } from './testcustomer/testcustomer.component';
import { SpecialorderComponent } from './specialorder/specialorder.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'topping', component: ToppingsComponent },
  { path: 'testcustomer', component: TestcustomerComponent},
  { path: 'specialorder', component: SpecialorderComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
