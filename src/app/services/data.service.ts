import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.dataUrl).pipe(
      map((data) => data.map((item) => new Record(item))) // Map JSON to `Record` instances
    );
  }
}
