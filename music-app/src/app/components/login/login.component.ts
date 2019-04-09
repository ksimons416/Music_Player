import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  returnUrl: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/userradio';
}

  loginSubmit() {
    this.authService.authenticate(this.email, this.password,
      () => this.router.navigate([this.returnUrl]),
      (err) => {
        console.log(err);
        console.log('not logged in');
      });
    console.log(this.email);
    console.log(this.password);
  }
}
