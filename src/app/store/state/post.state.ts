import {PostInterface} from '../../user/shared/interfaces/post.interface';

export interface PostState {
  posts: PostInterface[];
}

export const initialPostState: PostState = {
  posts: []
};
