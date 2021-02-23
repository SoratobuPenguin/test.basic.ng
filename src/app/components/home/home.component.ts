import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, OnDestroy, OnInit } from '@angular/core';

import { Nation } from '../../model/nation';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { onMainContentChange } from '../../animations/animations';
import { SideNavService } from '../../services/side-nav.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [onMainContentChange]
})
export class HomeComponent implements OnInit, OnDestroy
{
    @ViewChild('info', {static: false}) info?: InfoComponent; //Information block for nations
    nations: Nation[];
    selectedNation: Nation;
    public onSideNavChange?: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private http:HttpClient,
        private changeDetectorRef:ChangeDetectorRef,
        private _sideNavService: SideNavService ) {
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
            this.selectedNation = {
                name: "",
                nativeName: "",
                alpha2Code: "",
                alpha3Code: "",
                capital: "",
                flag: "",
                latlng: []
            };
            this._sideNavService.sideNavState$.subscribe( res => {
              this.onSideNavChange = res;
            })
            //Proper values through ngOnInit()
        }

    ngOnInit(): void {
        //Http subs
        this.http.get<Nation[]>( 'assets/data.json' )
            .pipe()
            .subscribe( (nations:Nation[]) => {
                this.nations = nations ? nations : [];
                this.changeDetectorRef.detectChanges();
                this.getSelectedNationAndResetFlagAni();
            } );
        //Router subs
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.getSelectedNationAndResetFlagAni();
                
            }
        });
    }

    getSelectedNationAndResetFlagAni(): void {
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
        //Reset Animations
        if (this.info != null){
            this.info.ResetFlagFade();
        }
    }

    ngOnDestroy(): void {
    }
}
