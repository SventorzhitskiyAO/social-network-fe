import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {selectSelectedUser} from '../../../../store/selectors/user.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';
import {UserInterface} from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-change-container',
  template: `<app-profile *ngIf="user$ | async as user" [user]="user"></app-profile>`,
})
export class ProfileContainerComponent implements OnInit{

  user$: Observable<UserInterface>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectSelectedUser);
  }
}
