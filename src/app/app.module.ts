import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { CurrencyComponent } from './user-details/currency/currency.component';
import { CurrencydetailsComponent } from './user-details/currency/currencydetails/currencydetails.component';
import { CurrencyhistoryComponent } from './user-details/currency/currencyhistory/currencyhistory.component';
import { AppRoutingModule } from './app.routing.module';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginLogoutComponent,
    UserDetailsComponent,
    RegistrationComponent,
    CurrencyComponent,
    CurrencydetailsComponent,
    CurrencyhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
