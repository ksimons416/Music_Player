import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-radio',
  templateUrl: './user-radio.component.html',
  styleUrls: ['./user-radio.component.css']
})
export class UserRadioComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userNavs: Array<{title: string}>;

  ngOnInit() {
    if (this.authService.hasRoles(1)) {
      this.userNavs = environment.UserNav;
    } else if (this.authService.hasRoles(2)) {
      this.userNavs = environment.NonSubNav;
    }
  }
}
