import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/login/auth';

  constructor(private http: HttpClient) { }

  static isLoggedIn(): boolean {
    return localStorage.getItem('authToken') != null;
  }

  static getLoggedInUser() {
    let usersJson = localStorage.getItem('authToken');
    if (usersJson === null) return null;
    let users = JSON.parse(usersJson);
    return users;
  }

  // hasRoles(users: Array<number>): boolean {
  //   const tokenRoles: Array<number> = JSON.parse(localStorage.getItem('authToken')).users;
  //   return users.every(subscription_id => tokenRoles.indexOf(subscription_id) >= 0);
  // }

  hasRoles(id: number): boolean {
    const tokenId = JSON.parse(localStorage.getItem('authToken')).subscription_id;
    return tokenId === id;
  }

  authenticate(email: string, password: string, success, fail) {
    return this.http.post<any>(this.authUrl,
      JSON.stringify({email: email, password: password}),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).toPromise()
      .then((resp) => {
          localStorage.setItem('authToken', JSON.stringify(resp));
          success();
        },
        (err) => {
          fail(err);
        });
  }
}
