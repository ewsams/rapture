import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-display-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article
      *ngIf="blogService.selectedBlog$ | async as blog"
      class="max-w-4xl mx-auto p-4"
    >
      <header class="bg-gray-100 p-6 rounded-t-lg shadow-md">
        <h1 class="text-3xl font-semibold text-gray-900 mb-2">
          {{ blog.title }}
        </h1>
        <p class="text-sm text-gray-500">By {{ blog.author }}</p>
        <time class="text-sm text-gray-500">
          {{ blog.date | date : 'fullDate' }}
        </time>
        <div class="mt-2 flex flex-wrap">
          <span
            class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {{ blog.category }}
          </span>
          <span
            class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {{ blog.views }}k Views
          </span>
        </div>
      </header>
      <section class="bg-white p-6 rounded-b-lg shadow-md">
        <img
          *ngIf="blog.images && blog.images[0]"
          [src]="blog.images[0]"
          alt="Featured image"
          class="rounded-lg mb-4 w-full object-cover h-96"
        />
        <div
          *ngFor="
            let paragraph of blog.content.split(
              '
'
            );
            let i = index
          "
        >
          <p
            class="text-gray-700 text-lg leading-relaxed mb-4 indent-11"
            [innerHTML]="paragraph"
          ></p>
          <img
            *ngIf="blog.images && blog.images[i + 1]"
            [src]="blog.images[i + 1]"
            alt="Image {{ i + 2 }}"
            class="rounded-lg mb-4 w-full object-cover h-96"
          />
        </div>
      </section>
    </article>
  `,
})
export class DisplayBlogComponent {
  constructor(protected blogService: BlogService) {}
}
