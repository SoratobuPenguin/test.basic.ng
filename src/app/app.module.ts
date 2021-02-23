import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
//Modules
import { MaterialModule } from './modules/material.module';
//Services
import { SideNavService } from './services/side-nav.service';
import { ThemePickerService } from './services/theme-picker.service';
//Components
import { HomeComponent } from './components/home/home.component';
import { NationNavBarComponent } from './components/nation-nav-bar/nation-nav-bar.component';
import { InfoComponent } from './components/info/info.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NationNavBarComponent,
    InfoComponent,
    ThemePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(app_routes),
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    SideNavService,
    ThemePickerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
