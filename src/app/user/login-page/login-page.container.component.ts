import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Login} from '../../store/actions/user.action';
import {authMe} from '../../store/selectors/user.selectors';
import {UserInterface} from '../shared/interfaces/user.interface';
import {UsersService} from '../shared/services/users.service';
import {log} from 'util';

@Component({
  selector: 'app-login-container',
  template: `
    <app-login (submitLog)="login($event)"></app-login>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageContainerComponent implements OnDestroy {
  id: number;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef,
    private s: UsersService
  ) {}

  login(body): void {
    this.store.dispatch(new Login(body));
    this.cd.detectChanges();
    this.s.errors$.subscribe(res => console.log(res));
    this.subscription = this.store.select(authMe)
      .pipe(
        map((data: UserInterface) => {
          if (data !== null) {
            this.router.navigate([`users/`, `${data._id}`]);
          }
        })
      ).subscribe();
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
