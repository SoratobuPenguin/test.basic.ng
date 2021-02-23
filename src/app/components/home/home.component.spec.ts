//@angular testing
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//@angular
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
//Modules
import { MaterialModule } from '../../modules/material.module';
//Services
import { SideNavService } from '../../services/side-nav.service';
import { ThemePickerService } from '../../services/theme-picker.service';
import { NationService } from '../../services/nation.service';
//Components 
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { NationNavBarComponent } from '../../components/nation-nav-bar/nation-nav-bar.component';
import { InfoComponent } from '../../components/info/info.component';
import { ThemePickerComponent } from '../../components/theme-picker/theme-picker.component';
//Models
import { Nation } from '../../model/nation';
//import * as json from '../../../assets/data.json'; //test nations

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const app_routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home/:id',
      component: HomeComponent
    }, {
      path: 'home',
      component: HomeComponent
    },{
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        NationNavBarComponent,
        InfoComponent,
        ThemePickerComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(app_routes),
        FlexLayoutModule,
        AppRoutingModule,
        MaterialModule,
        HttpClientTestingModule, 
        NoopAnimationsModule
      ],
      providers: [
        SideNavService, 
        ThemePickerService,
        NationService
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have 250 nations', waitForAsync(() => { 
      expect(component.nations.length).toBe(250);
  }));
});
