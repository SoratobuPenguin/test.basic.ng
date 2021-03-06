import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FlexAlignDirective } from '@angular/flex-layout';

import { Nation } from '../../model/nation';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() selectedNation:Nation;
  @ViewChild('flag', {static: false}) flag?: ElementRef; //Flag img html element

  constructor() {
    //defaults
    this.selectedNation = {
      name: "",
      nativeName: "",
      alpha2Code: "",
      alpha3Code: "",
      capital: "",
      flag: "",
      latlng: []
    };
    //Proper values through @Input()
  }

  ngOnInit(): void {
    
  }

  public ResetFlagFade(): void{
    if (this.flag != null){
      //Remove and Re-add animation css
      this.flag.nativeElement.classList.remove("animated");
      this.flag.nativeElement.classList.remove("fadeIn");
      this.flag.nativeElement.width = this.flag.nativeElement.width; //needed to restart css classes
      this.flag.nativeElement.classList.add("animated");
      this.flag.nativeElement.classList.add("fadeIn");
    }
  }

}
