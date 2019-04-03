import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  signUp(form: NgForm) {
    const user = new User;
    user.firstname = form.value['firstname'];
    user.lastname = form.value['lastname'];
    user.email = form.value['email'];
    user.password = form.value['password'];
    user.subscription_id = 2;

    this.userService.addUser(user)
    .subscribe(() => console.log('success'),
    () => console.log('failure'));
    this.submitted = true;
  }

}
