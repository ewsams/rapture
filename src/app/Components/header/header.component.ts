import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col items-center">
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          routerLink="/home"
        >
          <img
            src="assets/logo-images/official-rapture-ready.svg"
            alt="logo-image"
          />
          <span class="ml-3 text-xl">Official Rapture Ready</span>
        </a>
        <nav
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mt-2"
        >
          <a class="mr-5 hover:text-gray-900" routerLink="/blog"
            >Rapture Blog</a
          >
          <a class="mr-5 hover:text-gray-900" routerLink="/about">About</a>
          <a class="mr-5 hover:text-gray-900" routerLink="/terms-of-service"
            >Terms Of Service</a
          >
          <a class="mr-5 hover:text-gray-900" routerLink="/ready-kit"
            >Ready Kit</a
          >
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
