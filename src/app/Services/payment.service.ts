import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentRequest } from '../Models/PaymentRequest.model';
import { PaymentIntentResponse } from '../Models/PaymentIntentResponse.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/api/payment';

  constructor(private http: HttpClient) {}

  createPaymentIntent(
    paymentRequest: PaymentRequest
  ): Observable<PaymentIntentResponse> {
    return this.http.post<PaymentIntentResponse>(
      `${this.apiUrl}/create-payment-intent`,
      paymentRequest
    );
  }
}
