import { createAction, props } from '@ngrx/store';
import { BlogPost } from 'src/app/Models/BlogPost.model';

export const readArticle = createAction(
  '[User] Read Article',
  props<{ blogPostId: number }>() // Use the correct property type for your ID
);

export const readArticleSuccess = createAction(
  '[User] Read Article Success',
  props<{ blogPost: BlogPost }>()
);

export const readArticleFailure = createAction(
  '[User] Read Article Failure',
  props<{ error: string }>() // Error payload can be more specific based on your needs
);
