import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { currentBlogPost } from 'src/app/Blogs/CurrentBlogs';
import { BlogService } from 'src/app/Services/blog.service';
import { BlogPost } from 'src/app/Models/BlogPost.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/3" *ngFor="let post of blogPosts">
            <div
              class="h-full bg-gray-100 bg-opacity-75 px-8 pt-12 pb-14 rounded-lg overflow-hidden text-center relative"
            >
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
              >
                {{ post.category }}
              </h2>
              <h1
                class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
              >
                {{ post.title }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ post.description }}
              </p>
              <a
                class="text-indigo-500 inline-flex items-center"
                (click)="updateSelectedBlogPost(post)"
              >
                Read More
                <span class="material-symbols-outlined ml-1">book</span>
              </a>
              <div
                class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"
              >
                <!-- Views Icon -->
                <span
                  class="text-gray-400  inline-flex content-center items-center leading-none text-sm pr-3 py-1"
                >
                  <span class="material-symbols-outlined mr-1">
                    visibility
                  </span>
                  {{ post.views }}K
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BlogComponent {
  blogPosts = currentBlogPost;

  constructor(private blogService: BlogService, private router: Router) {}

  updateSelectedBlogPost(blog: BlogPost) {
    this.blogService.selectBlog(blog);
    this.router.navigate(['/blog', blog.id]);
  }
}
