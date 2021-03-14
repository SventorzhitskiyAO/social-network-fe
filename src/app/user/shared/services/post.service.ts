import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';

  getPost(id: string): Observable<any> {
    return this.http.get(`${this.url}/post/${id}`);
  }

  create(body: any): Observable<any> {
    return this.http.post(`${this.url}/post/`, body);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/post/${id}`);
  }
}
