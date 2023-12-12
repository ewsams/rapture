import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { BlogPost } from '../Models/BlogPost.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private selectedBlogSubject: BehaviorSubject<BlogPost | null> =
    new BehaviorSubject<BlogPost | null>(null);

  public selectedBlog$: Observable<BlogPost | null> =
    this.selectedBlogSubject.asObservable();

  public selectBlog(blogPost: BlogPost): void {
    this.selectedBlogSubject.next(blogPost);
  }
}
