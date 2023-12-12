import { Component, Input } from '@angular/core';
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
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="cardholderName"
            >
              Cardholder Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardholderName"
              type="text"
              placeholder="Name on card"
            />
          </div>
          <!-- Card Number -->
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="cardNumber"
            >
              Card Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <!-- Expiration Date -->
          <div class="mb-4 md:flex md:items-center md:justify-between">
            <div class="md:w-1/2 mb-4 md:mb-0">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="expirationDate"
              >
                Expiration Date
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expirationDate"
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <!-- CVV Code -->
            <div class="md:w-1/4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="cvvCode"
              >
                CVV Code
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvvCode"
                type="text"
                placeholder="123"
              />
            </div>
          </div>
        </fieldset>

        <!-- Submit Button -->
        <div class="flex justify-end mt-8">
          <button
            class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  `,
})
export class PaymentInformationFormComponent {
  @Input() totalPrice = 0;
  sameAsBilling = true;
}
