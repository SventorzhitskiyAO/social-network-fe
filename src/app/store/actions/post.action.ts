import {Action} from '@ngrx/store';
import {PostInterface} from '../../user/shared/interfaces/post.interface';
import {PostCreateInterface} from '../../user/shared/interfaces/post-create.interface';

export enum PostActions {
  GetPosts = '[Post] GET_POST',
  GetPostsSuccess = '[Post] GET_POST_SUCCESS',
  CreatePost = '[Post] CREATE_POST',
  CreatePostSuccess = '[Post] CREATE_POST_SUCCESS',
  DeletePost = '[Post] DELETE_POST',
  DeletePostSuccess = '[Post] DELETE_POST_SUCCESS',
}

export class GetPosts implements Action {
  public readonly type = PostActions.GetPosts;

  constructor(public payload: string) {}
}

export class GetPostsSuccess implements Action {
  public readonly type = PostActions.GetPostsSuccess;

  constructor(public payload: PostInterface[]) {}
}

export class CreatePost implements Action {
  public readonly type = PostActions.CreatePost;

  constructor(public payload: PostCreateInterface) {}
}

export class CreatePostSuccess implements Action {
  public readonly type = PostActions.CreatePostSuccess;

  constructor(public payload: PostInterface) {}
}

export class DeletePost implements Action {
  public readonly type = PostActions.DeletePost;

  constructor(public payload: string) {}
}

export type TPostAction = (GetPosts | GetPostsSuccess | CreatePost | CreatePostSuccess | DeletePost);
