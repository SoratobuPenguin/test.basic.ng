import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Nation } from '../../model/nation';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy
{
    nations: Nation[];
    selectedNation: Nation;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http:HttpClient,
        private changeDetectorRef:ChangeDetectorRef ) {
            this.nations = [{
                name: "",
                nativeName: "",
                alpha2Code: "",
                alpha3Code: "",
                capital: "",
                flag: "",
                latlng: []
            }];
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
        this.http.get<Nation[]>( 'assets/data.json' )
            .pipe()
            .subscribe( (nations:Nation[]) => {
                this.nations = nations ? nations : [];
                this.changeDetectorRef.detectChanges();
                this.getSelectedNationAndID();
            } );
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.getSelectedNationAndID();
            }
        });
    }

    getSelectedNationAndID(): void {
        //id from angular router
        let id = this.route.snapshot.paramMap.get('id');
        if (id != null){
            //reroute non-uppercase id's
            if (id.toLocaleUpperCase() != id){
                this.router.navigate(["/home/"+id.toLocaleUpperCase()]);//.then(() => window.location.reload());
            }else{
                //find nation of id
                let nullableNation = this.nations.find(x => x.alpha3Code == id);
                if (nullableNation != null){
                    this.selectedNation = {
                        name: nullableNation.name,
                        nativeName: nullableNation.nativeName,
                        alpha2Code: nullableNation.alpha2Code,
                        alpha3Code: nullableNation.alpha3Code,
                        capital: nullableNation.capital,
                        flag: nullableNation.flag,
                        latlng: nullableNation.latlng
                        };
                }
            }
        }
        
    }

    ngOnDestroy(): void {
    }
}
