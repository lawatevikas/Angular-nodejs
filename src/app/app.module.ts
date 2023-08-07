import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AcSuccessComponent } from './ac-success/ac-success.component';
import { HomeComponent } from './home/home.component';
import { ProductVerificationComponent } from './home/product-verification/product-verification.component';
import { DataTransferService } from './services/data-transfer.service';
import { ChashOnComponent } from './purchase/chash-on/chash-on.component';
import { OnlinePaymentComponent } from './purchase/online-payment/online-payment.component';
import { OrderSuccessComponent } from './purchase/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcSuccessComponent,
    HomeComponent,
    ProductVerificationComponent,
    ChashOnComponent,
    OnlinePaymentComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
