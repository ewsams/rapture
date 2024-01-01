import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadStripe,
  Stripe,
  StripeElements,
  StripeCardElement,
} from '@stripe/stripe-js';
import * as PaymentSelectors from '../../Store/Selectors/payment.selectors';
import * as PaymentActions from '../../Store/Actions/payment.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-information-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto p-5">
      <form
        class="w-full max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <!-- Billing Address Section -->
        <fieldset class="mb-6">
          <legend class="text-xl font-semibold mb-3">Billing Address</legend>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <!-- First Name -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingFirstName"
              >
                First Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingFirstName"
                type="text"
                placeholder="John"
              />
            </div>
            <!-- Last Name -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingLastName"
              >
                Last Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingLastName"
                type="text"
                placeholder="Doe"
              />
            </div>
            <!-- Address Line 1 -->
            <div class="md:col-span-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingAddress1"
              >
                Address Line 1
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingAddress1"
                type="text"
                placeholder="123 Main St"
              />
            </div>
            <!-- Address Line 2 -->
            <div class="md:col-span-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingAddress2"
              >
                Address Line 2
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingAddress2"
                type="text"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <!-- City -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingCity"
              >
                City
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingCity"
                type="text"
                placeholder="Anytown"
              />
            </div>
            <!-- State/Province -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingState"
              >
                State / Province
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingState"
                type="text"
                placeholder="State"
              />
            </div>
            <!-- ZIP/Postal Code -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingZip"
              >
                ZIP / Postal Code
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingZip"
                type="text"
                placeholder="12345"
              />
            </div>
            <!-- Country -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingCountry"
              >
                Country
              </label>
              <select
                class="block w-full border border-gray-300 rounded py-2 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                id="billingCountry"
              >
                <option>United States</option>
                <option>Canada</option>
                <!-- More countries as needed -->
              </select>
            </div>
          </div>
        </fieldset>

        <!-- Checkbox to use same shipping address -->
        <div class="flex items-center mb-4">
          <input
            id="sameAsBilling"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            [(ngModel)]="sameAsBilling"
            name="sameAsBilling"
          />
          <label for="sameAsBilling" class="ml-2 block text-sm text-gray-900">
            Shipping address is the same as billing address
          </label>
        </div>

        <!-- Shipping Address Section -->
        <fieldset class="mb-6" *ngIf="!sameAsBilling">
          <legend class="text-xl font-semibold mb-3">Shipping Address</legend>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <!-- First Name -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingFirstName"
              >
                First Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingFirstName"
                type="text"
                placeholder="John"
              />
            </div>
            <!-- Last Name -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingLastName"
              >
                Last Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingLastName"
                type="text"
                placeholder="Doe"
              />
            </div>
            <!-- Address Line 1 -->
            <div class="md:col-span-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingAddress1"
              >
                Address Line 1
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingAddress1"
                type="text"
                placeholder="123 Main St"
              />
            </div>
            <!-- Address Line 2 -->
            <div class="md:col-span-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingAddress2"
              >
                Address Line 2
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingAddress2"
                type="text"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <!-- City -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingCity"
              >
                City
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingCity"
                type="text"
                placeholder="Anytown"
              />
            </div>
            <!-- State/Province -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingState"
              >
                State / Province
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingState"
                type="text"
                placeholder="State"
              />
            </div>
            <!-- ZIP/Postal Code -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingZip"
              >
                ZIP / Postal Code
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="billingZip"
                type="text"
                placeholder="12345"
              />
            </div>
            <!-- Country -->
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="billingCountry"
              >
                Country
              </label>
              <select
                class="block w-full border border-gray-300 rounded py-2 px-3 shadow leading-tight focus:outline-none focus:shadow-outline"
                id="billingCountry"
              >
                <option>United States</option>
                <option>Canada</option>
                <!-- More countries as needed -->
              </select>
            </div>
          </div>
        </fieldset>

        <!-- Payment Information Section -->
        <fieldset class="mb-6">
          <legend class="text-xl font-semibold mb-3">
            Payment Information
          </legend>
          <!-- Cardholder Name -->
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardholderName"
              type="text"
              placeholder="Name on card"
            />
          </div>
          <!-- Stripe Card Element Container -->
          <div class="mt-4">
            <div
              id="cardElement"
              #cardInfo
              class="p-3 bg-white border border-gray-300 rounded shadow focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></div>
          </div>
        </fieldset>

        <!-- Submit Button -->
        <div class="flex justify-end mt-8">
          <button
            class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            (click)="submitPayment()"
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>

    <div #cardInfo></div>
  `,
})
export class PaymentInformationFormComponent implements AfterViewInit {
  @Input() totalPrice = 0;
  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef | undefined;
  sameAsBilling = true;

  stripe: Stripe | undefined;
  card: StripeCardElement | undefined;
  elements: StripeElements | undefined;

  constructor(private store: Store) {
    // Load Stripe elements and create card element
    loadStripe(
      // Replace with your own publishable key
      '$$$$$$PUBLISHABLE_KEY$$$$$$'
    ).then((stripe) => {
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }
      this.stripe = stripe;
      this.elements = stripe.elements();
    });
  }

  ngAfterViewInit() {
    if (!this.elements) {
      throw new Error('Stripe elements failed to load');
    }
    this.card = this.elements.create('card');
    this.card.mount(this.cardInfo?.nativeElement);
  }

  submitPayment() {
    // Dispatch action to create payment intent
    const paymentRequest = {
      amount: 100,
      currency: 'usd',
    };
    this.store.dispatch(PaymentActions.createPaymentIntent({ paymentRequest }));

    // Subscribe to the paymentIntent state
    this.store
      .select(PaymentSelectors.selectPaymentIntent)
      .subscribe((paymentIntent) => {
        if (paymentIntent && paymentIntent.clientSecret) {
          this.confirmPayment(paymentIntent.clientSecret);
        }
      });
  }

  private async confirmPayment(clientSecret: string) {
    if (!this.stripe || !this.card) {
      throw new Error('Stripe or card element not initialized');
    }

    try {
      const result = await this.stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: this.card },
      });

      if (result.error) {
        // Handle error
        console.error('Payment confirmation error:', result.error.message);
      } else if (
        result.paymentIntent &&
        result.paymentIntent.status === 'succeeded'
      ) {
        // Handle successful payment
        console.log('Payment successful');
      }
    } catch (error) {
      // Handle any other errors
      console.error('Error during payment confirmation:', error);
    }
  }
}
