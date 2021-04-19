import {initialPostState, PostState} from '../state/post.state';

describe('PostSelector', () => {
  let state: PostState;

  beforeEach(() => {
    state = createStore(posts, initialPostState);
  });
});
