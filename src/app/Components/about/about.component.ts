import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-bold mb-4">About Rapture Ready Ministry</h1>
        <p class="text-lg text-gray-500">
          Dedicated to preparing souls for the spiritual journey
        </p>
      </div>

      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h2 class="text-2xl font-bold mb-3">Our Mission</h2>
          <p class="text-gray-700 mb-4">
            Rapture Ready Ministry is committed to providing insights,
            resources, and guidance for those who seek to understand the
            biblical prophecy of the rapture and prepare spiritually for this
            event. Our mission is to educate, inspire, and support believers
            across the globe as they live in anticipation of the Second Coming.
          </p>
          <p class="text-gray-700">
            Through our outreach efforts, we aim to spread the message of
            salvation, hope, and readiness. We believe that by preparing our
            hearts and encouraging others to do the same, we can make a positive
            impact in the world and help many find peace and purpose in their
            faith.
          </p>
        </div>
        <div class="flex justify-center w-full lg:w-1/2 px-4">
          <img
            class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Service 1 Expanded Content -->
          <div class="bg-white rounded shadow p-6">
            <h3 class="font-bold mb-2 text-xl">Educational Resources</h3>
            <p class="text-gray-700 mb-3">
              Dive into our extensive library of educational resources,
              including detailed articles, comprehensive study guides, and
              enlightening video series. Our materials are crafted to cater to
              both newcomers and seasoned scholars, ensuring a deep and nuanced
              understanding of eschatological concepts.
            </p>
            <p class="text-gray-700">
              Stay informed with our regular newsletters and be the first to
              access new studies and book releases curated by leading
              theologians in the field of eschatology.
            </p>
          </div>

          <!-- Service 2 Expanded Content -->
          <div class="bg-white rounded shadow p-6">
            <h3 class="font-bold mb-2 text-xl">Community Support</h3>
            <p class="text-gray-700 mb-3">
              Join our vibrant community where discussions flourish and bonds
              are formed. Our forums and discussion groups are a safe haven for
              asking questions, seeking prayer, and offering support to fellow
              believers.
            </p>
            <p class="text-gray-700">
              Engage in our mentorship programs, where experienced members of
              our community guide and support newcomers on their spiritual
              journey towards understanding the last days.
            </p>
          </div>

          <!-- Service 3 Expanded Content -->
          <div class="bg-white rounded shadow p-6">
            <h3 class="font-bold mb-2 text-xl">Events & Gatherings</h3>
            <p class="text-gray-700 mb-3">
              We bring together passionate individuals through conferences,
              seminars, and retreats focused on the study and discussion of
              prophetic scriptures. These events are milestones in our calendar,
              providing unforgettable experiences of worship and insight.
            </p>
            <p class="text-gray-700">
              Our local and international gatherings also serve as platforms for
              networking, where individuals can connect with leaders and
              influencers in the field of eschatology.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
