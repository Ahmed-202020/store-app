import { Component, OnInit } from '@angular/core';
import { CartService } from './../../Services/cart.service';
import { DataService } from './../../Services/data.service';
import { Product } from './../../Interfaces/product';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isData: number = this._DataService.productCart.getValue();
  items: any = [];
  constructor(private _CartService:CartService , private _DataService:DataService) { }

  ngOnInit(): void {
    this.items = this._CartService.getItems();
    if (this.items.length == 0) {
      this.isData = 0;
    }
  }
  deleteItem(product: Product[]) {
    this._DataService.deleteCount();
    this._CartService.deleteItem(product);
    if (this.items.length == 0) {
      this.isData = 0;
    }
  }
}
