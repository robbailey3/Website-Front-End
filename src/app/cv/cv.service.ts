import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private url = '/assets/cv.json';
  constructor(private http: HttpClient) {}
  getCV(): Observable<object> {
    return this.http.get<object>(this.url);
  }
}
