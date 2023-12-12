import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-18 items-center justify-center flex-col"
    >
      <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="assets/rapture-images/rapture-2.png"
      />
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Embracing Faith and Fellowship on the Path to Rapture
        </h1>
        <p class="mb-8 leading-relaxed">
          Welcome to OfficialRaptureReady.com, a beacon of hope and guidance for
          those who await the fulfillment of prophecy. In the spirit of
          fellowship and divine expectation, we delve into the teachings of
          scripture, seeking wisdom and understanding as we journey together
          towards spiritual readiness. Join us as we explore the depths of
          faith, engage in meaningful discussions, and uplift one another with
          encouragement and prayer. Here, amidst the echoes of eternity, we
          stand united, vigilant, and joyous, anticipating the glorious moment
          of rapture with open hearts and prepared souls.
        </p>
      </div>
    </div>
  </section>`,
})
export class HomeComponent {}
