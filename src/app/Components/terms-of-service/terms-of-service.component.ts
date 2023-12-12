import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-3xl text-center font-bold mb-4">Terms of Service</h1>
        <p class="text-center text-gray-600">
          Effective date: {{ todaysDate | date : 'mediumDate' }}
        </p>
      </div>

      <div class="prose prose-lg max-w-none">
        <!-- Enhanced Section 1: Acceptance of Terms -->
        <section>
          <h2 class="font-bold text-xl mt-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using OfficialRaptureReady.com (the "Site"), you
            affirm that you are of legal age to enter into these Terms of
            Service ("Terms"), or, if you are not, that you have obtained
            parental or guardian consent to enter into these Terms. Your access
            to and use of the Site is conditioned on your acceptance of and
            compliance with these Terms. These Terms apply to all visitors,
            users, and others who access or use the Site.
          </p>
        </section>

        <!-- Enhanced Section 2: Modification of Terms -->
        <section>
          <h2 class="font-bold text-xl mt-4">2. Modification of Terms</h2>
          <p>
            OfficialRaptureReady.com reserves the right, at our discretion, to
            revise or update these Terms at any time. If a revision is material,
            we will make reasonable efforts to provide at least 30 days' notice
            prior to any new terms taking effect. What constitutes a material
            change will be determined at our sole discretion. Your continued use
            of the Site after such changes will constitute acknowledgment and
            agreement of the modified Terms.
          </p>
        </section>

        <!-- Enhanced Section 3: Use of the Site -->
        <section>
          <h2 class="font-bold text-xl mt-4">3. Use of the Site</h2>
          <p>
            In addition to not infringing upon the rights of others, you must
            also refrain from compromising the security of the Site, including
            but not limited to, attempting to gain unauthorized access to the
            Site's backend systems or networks or conducting any activity that
            disrupts the services and resources provided by the Site. Failure to
            comply with these usage standards may result in termination of your
            access to the Site and legal action.
          </p>
        </section>

        <!-- Enhanced Section 4: Intellectual Property -->
        <section>
          <h2 class="font-bold text-xl mt-4">4. Intellectual Property</h2>
          <p>
            The intellectual property rights of the Site and its original
            content, features, and functionality are owned by
            OfficialRaptureReady.com and are protected by copyright, trademark,
            patent, trade secret, and other intellectual property or proprietary
            rights laws. By using the Site, you agree to respect these rights
            and not to infringe upon them in any way.
          </p>
        </section>

        <!-- Enhanced Section 5: Your Content -->
        <section>
          <h2 class="font-bold text-xl mt-4">5. Your Content</h2>
          <p>
            When you create, upload, post, send, receive, or store content that
            may include text, images, video, or other materials to or through
            our Site, you grant OfficialRaptureReady.com and our affiliates a
            worldwide, royalty-free license to use, host, store, reproduce,
            modify, create derivative works (such as those resulting from
            translations, adaptations, or other changes), communicate, publish,
            publicly perform, publicly display, and distribute such content for
            the limited purpose of operating, promoting, and improving our
            services, and to develop new ones.
          </p>
        </section>

        <!-- Enhanced Section 6: Disclaimer of Warranties -->
        <section>
          <h2 class="font-bold text-xl mt-4">6. Disclaimer of Warranties</h2>
          <p>
            You expressly understand and agree that your use of the Site and its
            services is at your sole risk. The Site and all products and
            services delivered to you through the Site are (except as expressly
            stated by us) provided 'as is' and 'as available' for your use,
            without any representation, warranties, or conditions of any kind,
            either express or implied, including all implied warranties or
            conditions of merchantability, merchantable quality, fitness for a
            particular purpose, durability, title, and non-infringement.
          </p>
        </section>

        <!-- Enhanced Section 7: Limitation of Liability -->
        <section>
          <h2 class="font-bold text-xl mt-4">7. Limitation of Liability</h2>
          <p>
            In no case shall OfficialRaptureReady.com, our directors, officers,
            employees, affiliates, agents, contractors, interns, suppliers,
            service providers, or licensors be liable for any injury, loss,
            claim, or any direct, indirect, incidental, punitive, special, or
            consequential damages of any kind, including, without limitation,
            lost profits, lost revenue, lost savings, loss of data, replacement
            costs, or any similar damages, whether based in contract, tort
            (including negligence), strict liability or otherwise, arising from
            your use of any of the service or any products procured using the
            site, or for any other claim related in any way to your use of the
            service or any product, including, but not limited to, any errors or
            omissions in any content, or any loss or damage of any kind incurred
            as a result of the use of the service or any content (or product)
            posted, transmitted, or otherwise made available via the service,
            even if advised of their possibility.
          </p>
        </section>

        <!-- Enhanced Section 8: Governing Law -->
        <section>
          <h2 class="font-bold text-xl mt-4">8. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted according to the
            laws of the country/state from which the Site is operated, without
            regard to conflict of law principles. Furthermore, you and
            OfficialRaptureReady.com agree to the jurisdiction of the federal
            and state courts located in said country/state to resolve any
            dispute, claim, or controversy that relates to or arises in
            connection with the Terms (and any non-contractual disputes/claims
            relating to or arising in connection with them).
          </p>
        </section>

        <!-- Enhanced Section 9: Contact Information -->
        <section>
          <h2 class="font-bold text-xl mt-4">9. Contact Information</h2>
          <p>
            For any questions, concerns, or disputes, you agree to contact us in
            the first instance at [insert contact email] and attempt to resolve
            the dispute with us informally. In the unlikely event that
            OfficialRaptureReady.com has not been able to resolve a dispute it
            has with you after attempting to do so informally, we each agree to
            resolve any claim, dispute, or controversy (excluding any
            OfficialRaptureReady.com claims for injunctive or other equitable
            relief) arising out of or in connection with or relating to these
            Terms by binding arbitration by [insert arbitration entity].
          </p>
        </section>

        <!-- Last Updated -->
        <section>
          <h2 class="font-bold text-xl mt-4">Last Updated</h2>
          <p>These Terms were last updated on November 3rd, 2023</p>
        </section>
      </div>
    </div>
  `,
})
export class TermsOfServiceComponent {
  todaysDate = new Date();
}
