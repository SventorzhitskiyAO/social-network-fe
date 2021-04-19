import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';
import {selectSelectedUser} from '../../../../store/selectors/user.selectors';
import {FriendService} from '../../services/friend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  user;
  users = [];

  constructor(
    private store: Store<AppState>,
    private friendSer: FriendService,
    private route: Router) {}

  ngOnInit(): void {
    this.store.select(selectSelectedUser).subscribe(res => this.user = res);

    this.friendSer.getFriends(this.user._id).subscribe(res => {
      console.log(res);
      res.forEach(elem => {
        if (elem.friend[0]._id !== this.user._id) {
          this.users.push(elem.friend[0]);
        }else if (elem.friendTwo[0]._id !== this.user._id) {
          this.users.push(elem.friendTwo[0]);
        }
      });
    });
  }
}
