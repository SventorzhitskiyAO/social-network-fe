import {Component} from '@angular/core';
import {UsersService} from './user/shared/services/users.service';
import {AppState} from './store/state/app.state';
import {Store} from '@ngrx/store';
import {IsAuth} from './store/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  UsersService = UsersService;
  constructor(private store: Store<AppState>) {
    if (UsersService.isAuthenticated()){
      this.store.dispatch(new IsAuth());
    }
  }

  logout(): void {
    UsersService.logOut();
  }
}
