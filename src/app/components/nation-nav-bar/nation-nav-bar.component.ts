import { Component, Input, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../../animations/animations';
import { SideNavService } from '../../services/side-nav.service';

import { Nation } from '../../model/nation';

@Component({
  selector: 'app-nation-nav-bar',
  templateUrl: './nation-nav-bar.component.html',
  styleUrls: ['./nation-nav-bar.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class NationNavBarComponent implements OnInit {
  @Input() nations:Nation[];
  public sideNavState: boolean = false;
  public fullText: boolean = false;

  constructor(private _sideNavService: SideNavService) {
    //defaults
    this.nations = [{
      name: "",
      nativeName: "",
      alpha2Code: "",
      alpha3Code: "",
      capital: "",
      flag: "",
      latlng: []
    }];
    //Proper values through @Input()
  }
  
  ngOnInit(): void {

  }

  sideNavToggle() {
    this.sideNavState = !this.sideNavState;
    this.fullText = !this.fullText;
    setTimeout(() => {
      this.fullText = this.sideNavState;
    }, 200)
    this._sideNavService.sideNavState$.next(this.sideNavState);
  }
}
