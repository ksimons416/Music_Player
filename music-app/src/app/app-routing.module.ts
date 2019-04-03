
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRadioComponent } from './components/user-radio/user-radio.component';
import { UserSubscriptionComponent } from './components/user-subscription/user-subscription.component';
import { RockComponent } from './components/user-radio/rock/rock.component';
import { MetalComponent } from './components/user-radio/metal/metal.component';
import { EdmComponent } from './components/user-radio/edm/edm.component';
import { CountryComponent } from './components/user-radio/country/country.component';
import { RapComponent } from './components/user-radio/rap/rap.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {UserUnsubscribeComponent} from './components/user-unsubscribe/user-unsubscribe.component';
import {UserUnsubpage1Component} from './components/user-unsubpage1/user-unsubpage1.component';
import {UserUnsubpage2Component} from './components/user-unsubpage2/user-unsubpage2.component';
import { FreeradioComponent } from './components/freeradio/freeradio.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userradio',
    component: UserRadioComponent
  },
  {
    path: 'userradio/rock',
    component: RockComponent
  },
  {
    path: 'userradio/metal',
    component: MetalComponent
  },
  {
    path: 'userradio/edm',
    component: EdmComponent
  },
  {
    path: 'userradio/country',
    component: CountryComponent
  },
  {
    path: 'userradio/rap',
    component: RapComponent
  },
  {
    path: 'usersubscription',
    component: UserSubscriptionComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'userunsubbing',
    component: UserUnsubscribeComponent
  },
  {
    path: 'userunsubbingchance',
    component: UserUnsubpage1Component
  },
  {
    path: 'userunsubchance2',
    component: UserUnsubpage2Component
  },
{
  path: 'freeradio',
  component: FreeradioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
