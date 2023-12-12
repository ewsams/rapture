import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentInformationFormComponent } from '../payment-information-form/payment-information-form.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, PaymentInformationFormComponent],
  template: `
    <div class="container px-4 sm:px-6 lg:px-8 mx-auto mt-10">
      <div class="flex flex-col lg:flex-row shadow-md my-10">
        <div class="bg-white p-5 lg:w-3/5">
          <h1 class="font-semibold text-2xl border-b pb-8">Checkout</h1>
          <div class="mb-10">
            <h2 class="text-lg font-semibold">Rapture Ready Kit</h2>
            <p class="text-sm mb-6 w-2/5">
              The essential kit for your spiritual and physical preparedness.
              Includes literature, supplies, and resources to ensure peace of
              mind.
            </p>
            <div class="flex items-center border-b py-4">
              <div class="flex-1 pr-4">
                <label class="block text-sm font-medium mb-1" for="quantity"
                  >Quantity:</label
                >
                <input
                  type="number"
                  id="quantity"
                  class="focus:outline-none w-16 border-gray-300 rounded-md shadow-sm text-center"
                  [(ngModel)]="quantity"
                  (ngModelChange)="updateQuantity($event)"
                  min="1"
                />
              </div>
              <div class="flex-1">
                <span class="text-lg font-semibold"
                  >{{ unitPrice | currency }} each</span
                >
              </div>
            </div>
          </div>
          <app-payment-information-form
            [totalPrice]="total"
          ></app-payment-information-form>
        </div>
        <div class="bg-white p-5 lg:w-2/5">
          <img
            alt="Rapture Ready Kit"
            src="https://dummyimage.com/300x300"
            class="mb-8"
          />
          <h2 class="font-semibold text-2xl border-b pb-8">Order Summary</h2>
          <div class="mt-8">
            <div class="flex justify-between py-4 border-b">
              <span>Subtotal</span>
              <span>{{ subtotal | currency }}</span>
            </div>
            <div class="flex justify-between py-4 border-b">
              <span>Shipping</span>
              <span>{{ shippingCost | currency }}</span>
            </div>
            <div class="flex justify-between py-4 border-b">
              <span>Tax</span>
              <span>{{ tax | currency }}</span>
            </div>
            <div class="flex justify-between py-4">
              <span class="text-lg font-bold">Total</span>
              <span class="text-lg font-bold">{{ total | currency }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CheckoutComponent implements OnInit {
  quantity: number = 1;
  unitPrice: number = 19.99; // Unit price per kit
  shippingCost: number = 4.99;
  taxRate: number = 0.08; // 8% sales tax, for example
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;

  ngOnInit() {
    this.calculateCosts(); // Initial calculation on load
  }

  calculateCosts() {
    this.subtotal = this.unitPrice * this.quantity;
    this.tax = this.subtotal * this.taxRate;
    this.total = this.subtotal + this.tax + this.shippingCost;
  }

  updateQuantity(newQuantity: string) {
    const quantity = parseInt(newQuantity, 10);
    if (!isNaN(quantity) && quantity > 0) {
      this.quantity = quantity;
      this.calculateCosts();
    }
  }
}
