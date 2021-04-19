import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FriendService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';

  getFriends(id: string): Observable<any> {
    return this.http.get(`${this.url}/friend/${id}`);
  }

  createFriend(body): Observable<any> {
    return this.http.post(`${this.url}/friend`, body);
  }
}
