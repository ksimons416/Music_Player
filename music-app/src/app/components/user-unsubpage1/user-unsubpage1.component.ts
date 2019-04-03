import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-user-unsubpage1',
  templateUrl: './user-unsubpage1.component.html',
  styleUrls: ['./user-unsubpage1.component.css']
})
export class UserUnsubpage1Component implements OnInit {

  userNavs: Array<{title: string}>;

  constructor() { }

  ngOnInit() {
    this.userNavs = environment.UserNav;

  }

}
