import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly URL_BASE = `${environment.URL}contact`;
  constructor(private http: HttpClient) {}

  sendMail(data: JSON | FormData): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.URL_BASE, data);
  }
}
