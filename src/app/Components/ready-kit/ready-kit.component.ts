import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ready-kit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              Ultimate Rapture Ready Kit
            </h1>
            <div class="flex mb-4">
              <!-- Tab Links -->
              <a
                (click)="activeTab = 'description'"
                class="flex-grow text-center border-b-2 py-2 text-lg px-1"
                [ngClass]="{
                  'text-indigo-500 border-indigo-500':
                    activeTab === 'description',
                  'border-gray-300': activeTab !== 'description'
                }"
              >
                Description
              </a>
              <a
                (click)="activeTab = 'reviews'"
                class="flex-grow text-center border-b-2 py-2 text-lg px-1"
                [ngClass]="{
                  'text-indigo-500 border-indigo-500': activeTab === 'reviews',
                  'border-gray-300': activeTab !== 'reviews'
                }"
              >
                Reviews
              </a>
              <a
                (click)="activeTab = 'details'"
                class="flex-grow text-center border-b-2 py-2 text-lg px-1"
                [ngClass]="{
                  'text-indigo-500 border-indigo-500': activeTab === 'details',
                  'border-gray-300': activeTab !== 'details'
                }"
              >
                Details
              </a>
            </div>
            <!-- Tab Content -->
            <div [ngSwitch]="activeTab">
              <p
                *ngSwitchCase="'description'"
                class="leading-relaxed mb-4 indent-8"
              >
                Be prepared for any eventuality with our Rapture Ready Kit. Each
                item has been meticulously curated to ensure your comfort and
                safety during uncertain times. Whether you're dealing with power
                outages, natural disasters, or the unexpected, our comprehensive
                kit is your go-to resource for survival and peace of mind. The
                kit includes long-lasting food supplies, clean water solutions,
                first-aid necessities, and personal hygiene products to maintain
                health and well-being in any situation. For those unforeseen
                nights without power or heat, our kit comes equipped with
                durable flashlights, emergency glow sticks, thermal blankets,
                and a portable stove. Safety and communication are paramount in
                any emergency. Our Rapture Ready Kit contains a hand-crank radio
                for receiving vital updates, a multi-tool for various
                applications, and waterproof matches for starting fires in damp
                conditions. Compact yet extensive, our Rapture Ready Kit fits
                all these essentials into a rugged, weather-resistant backpack
                designed for quick departures and easy mobility. Ideal for
                individuals or families, the kit is a critical addition to your
                emergency preparedness plan, providing reassurance that you are
                ready for the Rapture or any critical event that may arise.
              </p>
              <div
                *ngSwitchCase="'reviews'"
                class="leading-relaxed mb-4 space-y-4"
              >
                <p>
                  <strong>John Doe:</strong> "I feel so much more at ease having
                  the Rapture Ready Kit. It's comprehensive and well thought
                  out."
                </p>
                <p>
                  <strong>Jane Smith:</strong> "The quality of the items in the
                  Rapture Kit is exceptional, and the peace of mind it brings is
                  invaluable."
                </p>
                <p>
                  <strong>Michael Brown:</strong> "As someone who likes to be
                  prepared, this kit takes it to the next level. The digital
                  resources are a huge plus!"
                </p>
                <p>
                  <strong>Emily Clark:</strong> "I purchased this for my whole
                  family. Knowing we have this kit in our home gives me a sense
                  of security."
                </p>
                <p>
                  <strong>David Wilson:</strong> "The attention to detail in the
                  Rapture Ready Kit is impressive. From the waterproof case to
                  the organized content, it's all top-notch."
                </p>
                <p>
                  <strong>Sarah Miller:</strong> "I never thought I'd need a kit
                  like this, but after going through an emergency without it,
                  I'll never be without one again. A must-have!"
                </p>
                <p>
                  <strong>Chris Lopez:</strong> "The Rapture Ready Kit is not
                  just practical; the inspirational material included was just
                  what I needed during tough times."
                </p>
              </div>

              <div *ngSwitchCase="'details'" class="mb-4">
                <h3 class="text-lg font-semibold mb-3">Kit Contents</h3>
                <ul class="list-disc space-y-2 ml-5 text-gray-700">
                  <li>
                    <strong>Emergency Preparedness Guides:</strong> Step-by-step
                    instructions on what to do in various emergency scenarios,
                    from natural disasters to power outages.
                  </li>
                  <li>
                    <strong>Survival Manuals:</strong> Detailed survival
                    techniques and strategies for self-sufficiency when outside
                    help isn't immediately available.
                  </li>
                  <li>
                    <strong>First Aid Tutorials:</strong> Visual and written
                    guides on administering first aid for common injuries and
                    health emergencies.
                  </li>
                  <li>
                    <strong>Digital Maps:</strong> High-resolution maps for
                    navigation and location tracking when GPS services are
                    unavailable.
                  </li>
                  <li>
                    <strong>Document Templates:</strong> Important document
                    templates for recording and maintaining critical personal
                    information securely.
                  </li>
                  <li>
                    <strong>Inspirational Material:</strong> A curated selection
                    of readings and texts to provide comfort and encouragement
                    during trying times.
                  </li>
                </ul>
                <p class="mt-4">
                  This thumb drive is encased in a rugged, waterproof shell,
                  ensuring your data is protected against physical damage and
                  the elements. Compact and discreet, it's the perfect addition
                  to your everyday carry or home emergency kit.
                </p>
              </div>
              <p *ngSwitchDefault class="leading-relaxed mb-4">
                Select a tab to see the content.
              </p>
            </div>
            <div class="flex">
              <button
                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                routerLink="/checkout"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <img
            alt="Rapture Ready Kit"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/300x300"
          />
        </div>
      </div>
    </section>
  `,
})
export class ReadyKitComponent {
  activeTab: string = 'description';
}
