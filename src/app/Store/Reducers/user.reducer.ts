import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../Actions/user.actions';
import { BlogPost } from 'src/app/Models/BlogPost.model';

export interface UserState {
  selectedBlogPost: BlogPost | null;
}

export const initialState: UserState = {
  selectedBlogPost: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.readArticleSuccess, (state, { blogPost }) => ({
    ...state,
    selectedBlogPost: blogPost,
  }))
);
