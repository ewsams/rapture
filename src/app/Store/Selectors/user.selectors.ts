import { createSelector } from '@ngrx/store';
import { AppState } from '..'; // Adjust the path as necessary
import { BlogPost } from 'src/app/Models/BlogPost.model';

export const selectUser = (state: AppState) => state.user;

export const selectSelectedBlogPost = createSelector(
  selectUser,
  (user) => user.selectedBlogPost as BlogPost
);
