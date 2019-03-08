import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../shared/interfaces/api-response.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly URL_BASE = `${environment.URL}photos`;
  constructor(private http: HttpClient) { }
  /**
   * @description
   * @param id - the ID of the photo album
   */
  getAlbumByID(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}/${id}`);
  }
  /**
   * @description
   */
  getAlbums(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.URL_BASE);
  }
}
