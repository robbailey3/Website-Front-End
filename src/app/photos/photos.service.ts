import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly URL_BASE = `${environment.URL}`;
  constructor(private http: HttpClient) { }
  /**
   * @description
   * @param id - the ID of the photo album
   */
  getAlbumByID(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}album/${id}`);
  }
  /**
   * @description
   */
  getAlbums(): Observable<APIResponse> {
    console.log(this.URL_BASE);
    return this.http.get<APIResponse>(`${this.URL_BASE}albums`);
  }
}
