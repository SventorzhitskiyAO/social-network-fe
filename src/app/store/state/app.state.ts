import {RouterReducerState} from '@ngrx/router-store';
import {initialUserState, UserState} from './user.state';
import {ConfigState, initialConfigState} from './config.state';
import {initialPostState, PostState} from './post.state';

export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  posts: PostState;
  config: ConfigState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  config: initialConfigState,
  posts: initialPostState
};

export const getInitialState = (): AppState => {
  return initialAppState;
};


