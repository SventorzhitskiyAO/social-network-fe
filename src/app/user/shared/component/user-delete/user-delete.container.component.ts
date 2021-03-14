import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';
import {DeleteUser} from '../../../../store/actions/user.action';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-delete-container',
  template: `<app-user-delete (submitDelete)="delete()"></app-user-delete>`,
})
export class UserDeleteContainerComponent implements OnInit, OnDestroy{
  id: string;
  private subscription: Subscription;
  private deleteSubscription: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);

  }

  delete(): void {
    this.store.dispatch(new DeleteUser(this.id));
    UsersService.logOut();
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }

    if (!!this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}

