import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MusicInterface} from '../interfaces/music.interface';

@Injectable()
export class MusicService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<MusicInterface[]> {
    return this.http.get<MusicInterface[]>(`${this.url}/music`);
  }

  getAllUserSOng(userId): Observable<MusicInterface[]> {
    return this.http.get<MusicInterface[]>(`${this.url}/music/${userId}`);
  }

  addMusic(body): Observable<any> {
    return this.http.post(`${this.url}/music`, body);
  }

  remove(songId): Observable<any> {
    return this.http.delete(`${this.url}/music/${songId}`);
  }
}
