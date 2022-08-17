import { Injectable } from '@angular/core';
import { Product } from './../Interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  ls: any = localStorage.getItem("products");
  items: any[] = JSON.parse(this.ls) || [];
  constructor() { }

  addToCart(product: Product[]) {
    this.items.push(product);
    localStorage.setItem("products", JSON.stringify(this.items));
  }
  getItems() {
    return this.items;
  }
  deleteItem(product: Product[]) {
    let index = this.items.indexOf(product);
    this.items.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(this.items));
  }
}

