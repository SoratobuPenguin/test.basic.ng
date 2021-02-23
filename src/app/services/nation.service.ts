import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Nation } from '../model/nation';

@Injectable({
  providedIn: 'root'
})
export class NationService {

  constructor(private http: HttpClient) {
  }

  getNations(): Observable<Nation[]>{
    return this.http.get<Nation[]>('/assets/data.json');
  }
}
