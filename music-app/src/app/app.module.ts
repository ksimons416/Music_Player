import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { UserRadioComponent } from './components/user-radio/user-radio.component';
import { UserSubscriptionComponent } from './components/user-subscription/user-subscription.component';
import { CountryComponent } from './components/user-radio/country/country.component';
import { EdmComponent } from './components/user-radio/edm/edm.component';
import { MetalComponent } from './components/user-radio/metal/metal.component';
import { RapComponent } from './components/user-radio/rap/rap.component';
import { RockComponent } from './components/user-radio/rock/rock.component';
import { FreeradioComponent } from './components/freeradio/freeradio.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserUnsubpage1Component } from './components/user-unsubpage1/user-unsubpage1.component';
import { UserUnsubpage2Component } from './components/user-unsubpage2/user-unsubpage2.component';
import { UserUnsubscribeComponent } from './components/user-unsubscribe/user-unsubscribe.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AuthGuardService } from './services/auth-guard.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserRadioComponent,
    UserSubscriptionComponent,
    CountryComponent,
    EdmComponent,
    MetalComponent,
    RapComponent,
    RockComponent,
    FreeradioComponent,
    SignUpComponent,
    UserUnsubpage1Component,
    UserUnsubpage2Component,
    UserUnsubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
