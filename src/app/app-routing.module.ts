import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcSuccessComponent } from './ac-success/ac-success.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductVerificationComponent } from './home/product-verification/product-verification.component';
import { ChashOnComponent } from './purchase/chash-on/chash-on.component';
import { OrderSuccessComponent } from './purchase/order-success/order-success.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'Ac-success',
    component:AcSuccessComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Product-verification',
    component:ProductVerificationComponent
  },
  {
    path:'cash-on',
    component:ChashOnComponent
  },
  {
    path:'order-success',
    component:OrderSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
