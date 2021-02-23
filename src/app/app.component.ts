
import { Component } from '@angular/core';

import { SideNavService } from './services/side-nav.service';
import { onMainContentChange } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ onMainContentChange ]
})
export class AppComponent {
  public onSideNavChange: boolean;

  constructor(private _sideNavService: SideNavService) {
    //defaults
    this.onSideNavChange = false;
    //value assignments via subscriptions
    this._sideNavService.sideNavState$.subscribe( res => {
      this.onSideNavChange = res;
    });
  }
}
