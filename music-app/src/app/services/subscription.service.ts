import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Subscription} from "../model/subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  addCardInfo(subscription: Subscription): Observable<Object> {
      return this.httpClient.post(`${this.apiUrl}/login/creditcard`, subscription);
  }
}
