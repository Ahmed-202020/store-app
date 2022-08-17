import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sliders:any[] = []
  constructor(private _DataService: DataService) {
  }
  ngOnInit(): void {
    this.sliders = this._DataService.data.sliders
  }
}
