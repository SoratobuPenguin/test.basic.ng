import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationNavBarComponent } from './nation-nav-bar.component';

describe('NationNavBarComponent', () => {
  let component: NationNavBarComponent;
  let fixture: ComponentFixture<NationNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
