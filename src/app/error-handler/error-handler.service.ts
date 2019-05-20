import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  readonly URL_BASE = `${environment.URL}errors`;
  constructor(private http: HttpClient) {}

  postError(error: JSON): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.URL_BASE, error);
  }
}
