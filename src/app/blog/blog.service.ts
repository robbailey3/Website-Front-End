import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../shared/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private URL_BASE = environment.URL + 'blog';
  constructor(private http: HttpClient) {}
  /**
   * @description GETs all the posts from the Database
   */
  getAllPosts(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.URL_BASE + '/true');
  }
  getPostBySlug(slug: string): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}/${slug}`);
  }
  getNPosts(N: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.URL_BASE}?limit=${N}`);
  }
}
