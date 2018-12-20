import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sicks } from '../models/sicks.interface';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  path: string = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getSick(): Observable<Sicks[]> {
    return this.http.get<Sicks[]>(`${this.path}/testing/regions`);
  }
}
