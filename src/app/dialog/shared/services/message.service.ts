import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
@Injectable()
export class SocketService {
  private host: string = window.location.protocol + '//' + window.location.hostname + ':' + 3100;
  private socket: any;

  constructor() {
    this.socket = io(this.host);
    this.socket.on('connect', () => this.connected());
    this.socket.on('disconnect', () => this.disconnected());
    this.socket.on('error', (error: string) => {
      console.log(`ERROR: "${error}" (${this.host})`);
    });
  }

  connect(): void {
    this.socket.connect();
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  emit(chanel, message): Observable<any> {
    return new Observable<any>(observer => {
      console.log(`emit to ${chanel}:`, message);
      this.socket.emit(chanel, message, (data) => {
        if (data.success) {
          observer.next(data.msg);
        } else {
          observer.error(data.msg);
        }
        observer.complete();
      });
    });
  }

  on(eventName: string): Observable<any> {
    console.log(`listen to ${eventName}:`);
    return new Observable<any>(observer => {
      this.socket.off(eventName);
      this.socket.on(eventName, (data) => {
        observer.next(data);
      });
    });
  }

  private connected(): void {
    console.log('Connected');
  }

  private disconnected(): void {
    console.log('Disconnected');
  }
}
