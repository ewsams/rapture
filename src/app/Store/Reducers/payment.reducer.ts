import { createReducer, on } from '@ngrx/store';
import * as PaymentActions from '../Actions/payment.actions';

export interface State {
  paymentIntent: any;
  error: any;
}

export const initialState: State = {
  paymentIntent: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(PaymentActions.createPaymentIntentSuccess, (state, { paymentIntent }) => ({
    ...state,
    paymentIntent,
  })),
  on(PaymentActions.createPaymentIntentFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
