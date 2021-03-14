import {PostState, initialPostState} from '../state/post.state';
import {PostActions, TPostAction} from '../actions/post.action';

export const postReducer = (state = initialPostState, action: TPostAction): PostState => {
  switch (action.type) {
    case PostActions.GetPosts:
      return {
        ...state,
        posts: []
      };
    case PostActions.GetPostsSuccess:
      return {
        ...state,
        posts: action.payload
      };
    case PostActions.CreatePostSuccess:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};
