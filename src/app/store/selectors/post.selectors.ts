import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PostState} from '../state/post.state';

export const posts = createFeatureSelector<PostState>('posts');

export const selectPostList = createSelector(
  posts,
  state => state.posts
);
