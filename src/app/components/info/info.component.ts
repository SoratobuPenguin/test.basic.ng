import { Component, Input, OnInit } from '@angular/core';

import { Nation } from '../../model/nation';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() selectedNation:Nation;

  constructor() {
    this.selectedNation = {
      name: "",
      nativeName: "",
      alpha2Code: "",
      alpha3Code: "",
      capital: "",
      flag: "",
      latlng: []
    };
  }

  ngOnInit(): void {
  }

}
