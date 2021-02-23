
import { Component } from '@angular/core';

import { ThemePickerService } from './services/theme-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme;

  constructor(private _themePicker: ThemePickerService) {
    this.theme = this._themePicker.getTheme();
  }
}
