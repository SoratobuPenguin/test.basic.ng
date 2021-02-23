import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { Nation } from '../../model/nation';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 250 nations in the http request', () => {
    let testData: Nation[] = [];
    let testUrl = 'assets/data.json'
    httpClient.get<Nation[]>(testUrl)
      .subscribe((nations:Nation[]) => {
        testData = nations ? nations : [];
    } );
    console.log(testData.length + " http nations");
    expect(testData.length == 250).toBeTruthy();
  });
  
  it('should have 250 nations', () => {
    console.log(component.nations.length + " component nations");
    expect(component.nations.length == 250).toBeTruthy();
  });
});
