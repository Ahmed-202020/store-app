import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { CartService } from './../../Services/cart.service';
import { Product } from './../../Interfaces/product';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: string = "";
  productDetails:any = {};
  constructor(private _CartService:CartService  , private _DataService:DataService , private _ActivatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params["id"];
    this.productDetails = this._DataService.data.products.filter((pro:any) => {
      return pro.id == this.id
    })
    console.log(this.productDetails)
  }
  addToCart(product:Product[]){
    this._CartService.addToCart(product)
  }
  addCount() {
    this._DataService.addCount();
  }
}
