import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPayment from '../Reducers/payment.reducer';

export const selectPaymentState = createFeatureSelector<fromPayment.State>('payment');

export const selectPaymentIntent = createSelector(
  selectPaymentState,
  (state) => state.paymentIntent
);

export const selectPaymentError = createSelector(
  selectPaymentState,
  (state) => state.error
);
