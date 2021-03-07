import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {LoginInterface} from '../interfaces/login.interface';
import {UserChangeInterface} from '../interfaces/user-change.interface';
import {CreateUserInterface} from '../interfaces/create-user.interface';
import {UserInterface} from '../interfaces/user.interface';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  static get token(): string {
    return localStorage.getItem('token');
  }

  url = 'http://localhost:3000';
  subscription$: Subscription;
  errors$: BehaviorSubject<string> = new BehaviorSubject(null);
  error: string;

  private static setToken(response): void {
    if (response) {
      localStorage.setItem('token', response.token);
    } else {
      localStorage.removeItem('token');
    }
  }

  static logOut(): void {
    UsersService.setToken(null);
  }

  static isAuthenticated(): boolean {
    return !!this.token;
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.url}/users`);
  }

  getOneUser(id: string): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`);
  }

  create(body: CreateUserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.url + '/users', body);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`);
  }

  change(body: UserChangeInterface): Observable<any> {
    return this.http.put(`${this.url}/users/${body.id}`, body);
  }

  getBoolLogin(l: string): Observable<any> {
    return this.http.post(`${this.url}/users/userName`, {login: l});
  }

  login(body: LoginInterface): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, body)
      .pipe(
        tap(UsersService.setToken),
        catchError(() => this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    const message = error.error.message;

    switch (message) {
      case 'Wrong login or password':
        this.errors$.next('Wrong login or password');
        break;
    }

    return throwError(error);
  }

  getUserByToken(): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.url}/auth`);
  }
}
