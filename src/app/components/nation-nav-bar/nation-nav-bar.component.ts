import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Nation } from '../../model/nation';

interface NavItem {
  link: string;
}

@Component({
  selector: 'app-nation-nav-bar',
  templateUrl: './nation-nav-bar.component.html',
  styleUrls: ['./nation-nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NationNavBarComponent implements OnInit {
  nations: Nation[] = [];

  constructor(
    private http:HttpClient,
    private changeDetectorRef:ChangeDetectorRef ) {}
  

  ngOnInit(): void {
    this.http.get<Nation[]>( 'assets/data.json' )
        .pipe()
        .subscribe( (nations:Nation[]) => {
            this.nations = nations ? nations : [];
            this.changeDetectorRef.detectChanges();
        } );
  }
  
}
