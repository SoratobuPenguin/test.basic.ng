import { Component, Input, OnInit } from '@angular/core';

import { Nation } from '../../model/nation';

@Component({
  selector: 'app-nation-nav-bar',
  templateUrl: './nation-nav-bar.component.html',
  styleUrls: ['./nation-nav-bar.component.scss']
})
export class NationNavBarComponent implements OnInit {
  @Input() nations:Nation[];

  constructor() {
      this.nations = [{
        name: "",
        nativeName: "",
        alpha2Code: "",
        alpha3Code: "",
        capital: "",
        flag: "",
        latlng: []
      }];
    }
  

  ngOnInit(): void {

  }
  
}
