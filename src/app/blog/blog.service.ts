import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../shared/interfaces/api-response.interface';
import { Observable } from 'rxjs';
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
    return this.http.get<APIResponse>(this.URL_BASE);
  }
  /**
   * @description POSTs data to the server to create a new post
   */
  createPost(data: FormData | JSON): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.URL_BASE, data);
  }
  /**
   * @description PUTs an existing resource in the database (used for updating)
   */
  updatePost(id: number, data: FormData | JSON): Observable<APIResponse> {
    return this.http.put<APIResponse>(this.URL_BASE + '/' + id, data);
  }
  /**
   * @description DELETEs a post from the database
   */
  deletePost(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(this.URL_BASE + '/' + id);
  }
}
