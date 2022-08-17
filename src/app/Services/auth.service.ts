import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login, Register, Logout } from './../Interfaces/auth';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { CartService } from './cart.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "https://route-egypt-api.herokuapp.com/";
  token: any = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router , private _DataService:DataService , private _CartService:CartService) { }

  saveUserData() {
    let incodedToken = JSON.stringify(localStorage.getItem("token"));
    let decodedToken = jwtDecode(incodedToken);
    this.token.next(decodedToken);
  }
  signUp(data:Register):Observable<any> {
    return this._HttpClient.post(this.baseUrl+"signup" , data)
  }

  signIn(data:Login):Observable<any> {
    return this._HttpClient.post(this.baseUrl+"signin" , data)
  }
  signOut() {
    localStorage.removeItem("token");
    this.token.next(null);
    localStorage.removeItem("count");
    this._DataService.productCart.next(0);
    this._DataService.counter = 0;
    localStorage.removeItem("products");
    this._CartService.items = [];
    localStorage.removeItem("delCount");
    this._Router.navigate(["/login"])
  }
}
