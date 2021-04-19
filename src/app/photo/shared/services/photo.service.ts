import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Injectable()
export class PhotoService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPhotos(id): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/photo/${id}`);
  }

  getAlbums(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.url}/albums/`);
  }

  addPhoto(body: any): Subscription {
    return this.http.post<any>(this.url + '/photo', body).subscribe();
  }

  createAlbums(body: any): Observable<any> {
    return this.http.post<any>(this.url + '/albums', body);
  }

  deletePhoto(id: string): Subscription {
    return this.http.delete(`${this.url}/photo/${id}`).subscribe();
  }

  deleteAlbums(id: string): Observable<any> {
    return this.http.delete(`${this.url}/albums/${id}`);
  }
}
