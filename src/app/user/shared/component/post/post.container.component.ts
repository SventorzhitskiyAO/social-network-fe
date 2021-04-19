import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';
import {CreatePost, DeletePost} from '../../../../store/actions/post.action';
import {selectPostList} from '../../../../store/selectors/post.selectors';
import {selectSelectedUser} from '../../../../store/selectors/user.selectors';

@Component({
  selector: 'app-container-post',
  template: `<app-post *ngIf="post$ | async as posts" [posts]="posts" (createPost)="submit($event)" (deletePost)="remove($event)" [user] = "user$ | async"></app-post>`
})
export class PostContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: string;
  post$ = this.store.select(selectPostList);
  user$ = this.store.select(selectSelectedUser);

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
  }

  submit(text): any {
    this.store.dispatch(new CreatePost({user: this.id, text}));
  }

  remove(id): void {
    this.store.dispatch(new DeletePost(id));
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
