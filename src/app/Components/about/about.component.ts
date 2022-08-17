import { Component, OnInit } from '@angular/core';
import { DataService } from './../../Services/data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  texts: any[] = [];
  constructor(private _DataService:DataService) { }

  ngOnInit(): void {
    this.texts = this._DataService.data.about;
  }

}
