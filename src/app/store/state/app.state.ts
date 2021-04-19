import {RouterReducerState} from '@ngrx/router-store';
import {initialUserState, UserState} from './user.state';
import {initialPostState, PostState} from './post.state';
import {initialMusicState, MusicState} from './music.state';

export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  posts: PostState;
  music: MusicState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  posts: initialPostState,
  music: initialMusicState,
};
