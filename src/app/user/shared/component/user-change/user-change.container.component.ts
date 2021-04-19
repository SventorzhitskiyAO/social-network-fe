import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {selectSelectedUser} from '../../../../store/selectors/user.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';
import {ChangeUser} from '../../../../store/actions/user.action';

@Component({
  selector: 'app-user-change-container',
  template: `<app-user-change *ngIf="user$ | async as user" [user]="user" (submitUpdate)="change($event)"></app-user-change>`,
})
export class UserChangeContainerComponent {
  id: string;
  user$ = this.store.select(selectSelectedUser);

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  change(body): void{
    for (const key in body) {
      if (!body[key]) {
        delete body[key];
      }
    }
    this.store.dispatch(new ChangeUser(body));
    this.router.navigate(['users', body.id, 'profile']);
  }
}

