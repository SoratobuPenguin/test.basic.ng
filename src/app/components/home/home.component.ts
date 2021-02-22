import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Nation } from '../../model/nation';
import { Router, ActivatedRoute, ɵangular_packages_router_router_b } from '@angular/router';

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
    id: string;

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
            //id from angular router
            let nullableID = this.route.snapshot.paramMap.get('id');
            this.id = "";
            if (nullableID != null){
                this.id = nullableID
            }
            console.log("id: "+this.id);
        }

    ngOnInit(): void {
        this.http.get<Nation[]>( 'assets/data.json' )
            .pipe()
            .subscribe( (nations:Nation[]) => {
                this.nations = nations ? nations : [];
                this.changeDetectorRef.detectChanges();
                if (this.id.toLocaleUpperCase() != this.id){
                    console.log("/home/"+this.id.toLocaleUpperCase());
                    this.router.navigate(["/home/"+this.id.toLocaleUpperCase()]);
                }else{
                    console.log(this.nations);
                    let nullableNation = this.nations.find(x => x.alpha3Code == this.id);
                    console.log(nullableNation);
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
            } );
    }

    ngOnDestroy(): void {
    }
}
