import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NationService } from './nation.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Nation } from '../model/nation';

describe('NationService', () => {
  let service: NationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        NationService
      ]
    });
    service = TestBed.inject(NationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getNations() should get 250 nations', () => { 
    service.getNations().subscribe((nats:Nation[]) => {
      expect(nats.length).toBe(250);
    });
  });
});
