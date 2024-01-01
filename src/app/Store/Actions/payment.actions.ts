import { createAction, props } from '@ngrx/store';
import { PaymentRequest } from '../../Models/PaymentRequest.model';

export const createPaymentIntent = createAction(
  '[Payment] Create Payment Intent',
  props<{ paymentRequest: PaymentRequest }>()
);

export const createPaymentIntentSuccess = createAction(
  '[Payment] Create Payment Intent Success',
  props<{ paymentIntent: PaymentRequest }>()
);

export const createPaymentIntentFailure = createAction(
  '[Payment] Create Payment Intent Failure',
  props<{ error: PaymentRequest }>()
);
