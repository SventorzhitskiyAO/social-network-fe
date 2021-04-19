import {initialPostState} from '../state/post.state';
import {postReducer} from './post.reducer';
import {CreatePostSuccess, GetPosts, GetPostsSuccess} from '../actions/post.action';

describe('PostReducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {type: 'NO'} as any;
      const result = postReducer(initialPostState, action);

      expect(result).toBe(initialPostState);
    });
  });

  describe('GetPosts', () => {
    it('should set empty array', () => {
      const action = new GetPosts('test');
      const result = postReducer(initialPostState, action);

      expect(result).toEqual({
        ...initialPostState,
        posts: []
      });
    });

    it('should set new array with posts', () => {
      const action = new GetPostsSuccess([{text: 'test'}]);
      const result = postReducer(initialPostState, action);

      expect(result).toEqual({
        ...initialPostState,
        posts: [{text: 'test'}]
      });
    });
  });

  describe('CreatePostSuccess', () => {
    it('should add new post at array', () => {
      const action = new CreatePostSuccess({text: 'test'});
      const result = postReducer(initialPostState, action);

      expect(result).toEqual({
        ...initialPostState,
        posts: [{text: 'test'}]
      });
    });
  });
});
