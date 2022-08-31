import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  counterCart: number = 0 ;
  constructor(private _AuthService: AuthService, public _DataService: DataService , private _CartService:CartService) {
  }
  ngOnInit(): void {
    const ls = localStorage.getItem("count");
    if (ls) {
      this._DataService.productCart.next(ls);
    }
    const ls2 = localStorage.getItem("login");
    if (ls2) {
      this.isLogin = JSON.parse(ls2);
    }
    this._DataService.productCart.subscribe({
      next: () => {
        this.counterCart = this._DataService.productCart.getValue();
      }
    })
    this._AuthService.isLogin.subscribe(() => {
      this.isLogin = this._AuthService.isLogin.getValue();
    })
  }
  logOut() {
    this._AuthService.signOut();
  }
}
