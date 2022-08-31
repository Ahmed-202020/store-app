import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { CartService } from './cart.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ls: any = localStorage.getItem("login");
  login: boolean = JSON.parse(this.ls) || false;
  isLogin:any = new BehaviorSubject(this.login);
  constructor(private _Router: Router , private _DataService:DataService , private _CartService:CartService) { }


  signIn() {
    this.login = true;
    this.isLogin.next(this.login);
    localStorage.setItem("login", this.isLogin.getValue());
  }
  signOut() {
    localStorage.removeItem("count");
    this.login = false;
    this.isLogin.next(this.login);
    localStorage.setItem("login", this.isLogin.getValue());
    this._DataService.productCart.next(0);
    this._DataService.counter = 0;
    localStorage.removeItem("products");
    this._CartService.items = [];
    localStorage.removeItem("delCount");
    this._Router.navigate(["/login"])
  }
}
