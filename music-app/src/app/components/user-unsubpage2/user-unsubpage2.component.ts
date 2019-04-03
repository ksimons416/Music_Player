import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-user-unsubpage2',
  templateUrl: './user-unsubpage2.component.html',
  styleUrls: ['./user-unsubpage2.component.css']
})
export class UserUnsubpage2Component implements OnInit {

  userNavs: Array<{title: string}>;

  constructor() { }

  ngOnInit() {
    this.userNavs = environment.UserNav;

  }

}
