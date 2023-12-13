import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { BlogPost } from '../Models/BlogPost.model';
import { currentBlogPost } from '../Blogs/CurrentBlogs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public getBlogPostById(blogPostId: number): Observable<BlogPost> {
    const blogPost = currentBlogPost.find(
      (post) => post.id === blogPostId
    ) as BlogPost;
    return of(blogPost);
  }
}
