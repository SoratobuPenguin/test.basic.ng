import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemePickerService } from 'src/app/services/theme-picker.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  checked = true; //true: light

  constructor(private _themePicker: ThemePickerService) { }

  ngOnInit(): void {
  }

  public toggle(event: MatSlideToggleChange) {
    if (event.checked == true){//light
      this._themePicker.setTheme("light-theme");
    }else {
      this._themePicker.setTheme("dark-theme");
    }
  }
}
