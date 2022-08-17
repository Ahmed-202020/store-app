import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Product } from './../../Interfaces/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  wordSearch = "";
  constructor(private _DataService:DataService) { }

  ngOnInit(): void {
    this.products = this._DataService.data.products;
  }
}
