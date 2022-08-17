import { Component, OnInit } from '@angular/core';
import { DataService } from './../../Services/data.service';
declare var $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  wordSearch = "";
  constructor(private _DataService:DataService) { }

  ngOnInit(): void {
    $("#style").hide(2000);
    this.products = this._DataService.data.products;
  }
}
