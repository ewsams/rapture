import { createSelector } from '@ngrx/store';
import { AppState } from '../Reducers'; // Adjust the path as necessary

export const selectUser = (state: AppState) => state.user;

export const selectSelectedBlogPost = createSelector(
  selectUser,
  (user) => user.selectedBlogPost
);
