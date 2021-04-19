import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostService} from '../../user/shared/services/post.service';
import {CreatePost, CreatePostSuccess, DeletePost, GetPosts, GetPostsSuccess, PostActions} from '../actions/post.action';
import {map, switchMap} from 'rxjs/operators';
import {PostInterface} from '../../user/shared/interfaces/post.interface';
import {Observable} from 'rxjs';

@Injectable()
export class PostEffects {
  constructor(
    private postService: PostService,
    private actions$: Actions,
  ) {}

  getPost$: Observable<GetPostsSuccess> = createEffect(() => {
    return this.actions$.pipe(
      ofType<GetPosts>(PostActions.GetPosts),
      switchMap((action: GetPosts) => this.postService.getPost(action.payload)),
      map((posts: PostInterface[]) => new GetPostsSuccess(posts))
    );
  });

  createPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<CreatePost>(PostActions.CreatePost),
      switchMap((action: CreatePost) => this.postService.create(action.payload)),
      map((post: PostInterface) => new CreatePostSuccess(post)),
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<DeletePost>(PostActions.DeletePost),
      switchMap((action) => this.postService.delete(action.payload)),
      map((post: PostInterface) => new GetPosts(post.user)),
    );
  });
}

