import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from '../Actions/user.actions';
import { of } from 'rxjs';
import { BlogService } from 'src/app/Services/blog.service';

@Injectable()
export class UserEffects {
  readArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.readArticle),
      mergeMap((action) => {
        return this.blogService.getBlogPostById(action.blogPostId).pipe(
          map((blogPost) => {
            if (blogPost) {
              return UserActions.readArticleSuccess({ blogPost });
            } else {
              return UserActions.readArticleFailure({
                error: 'Post not found',
              });
            }
          }),
          catchError((error) => {
            return of(UserActions.readArticleFailure({ error }));
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private blogService: BlogService) {}
}
