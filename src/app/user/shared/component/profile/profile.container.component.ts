import {Component} from '@angular/core';
import {selectSelectedUser} from '../../../../store/selectors/user.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';

@Component({
  selector: 'app-user-change-container',
  template: `<app-profile *ngIf="user$ | async as user" [user]="user"></app-profile>`,
})
export class ProfileContainerComponent {
  user$ = this.store.select(selectSelectedUser);

  constructor(private store: Store<AppState>) {}
}
