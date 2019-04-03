import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  updateUserSubscription(userid: number): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}` + `/login/usersubscription/` + `${userid}`, { responseType: 'text'});
  }

  addUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.apiUrl}` + `/login/signup`, user);
  }
//   addCardInfo(subscription: Subscription): Observable<Object> {
//     return this.httpClient.post(`${this.apiUrl}/login/creditcard`, subscription);
// }

}
