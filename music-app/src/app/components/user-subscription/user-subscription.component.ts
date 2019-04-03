import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { SubscriptionService } from '../../services/subscription.service';
import {Subscription} from '../../model/subscription';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-subscription',
  templateUrl: './user-subscription.component.html',
  styleUrls: ['./user-subscription.component.css']
})
export class UserSubscriptionComponent implements OnInit {

  subscription: Subscription = new Subscription();
  submitted = false;
  user = AuthService.getLoggedInUser();
  NonSubNav: Array<{title: string}>;
  returnUrl: string;

  constructor(private subscriptionService: SubscriptionService,
    private userService: UserService,  private router: Router, private route: ActivatedRoute,
    private authService: AuthService ) { }

  ngOnInit() {
    this.NonSubNav = environment.NonSubNav;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  onSubmit(form: NgForm) {
    const subscription = new Subscription;
    subscription.credit_card_no = form.value['credit-number'];
    subscription.exp_month = form.value['credit-mexpires'];
    subscription.exp_year = form.value['credit-yexpires'];
    subscription.cvv = form.value['credit-cvc'];
    subscription.user_id = this.user.userid;

    this.subscriptionService.addCardInfo(subscription)
    .subscribe(() => console.log('success'),
    () => console.log('failure'));

      this.userService.updateUserSubscription(this.user.userid)
        .subscribe(
          data => {
            console.log(data);
            this.user = data;
          },
      error => console.log(error));
      this.submitted = true;

    }
    logout() {
      localStorage.removeItem('authToken');
      this.router.navigate([this.returnUrl]);
      // window.location.reload();
    }
}
