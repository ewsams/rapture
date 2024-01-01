// payment.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PaymentService } from '../../Services/payment.service';
import * as PaymentActions from '../Actions/payment.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PaymentEffects {

  createPaymentIntent$ = createEffect(() => this.actions$.pipe(
    ofType(PaymentActions.createPaymentIntent),
    mergeMap(action =>
      this.paymentService.createPaymentIntent(action.paymentRequest).pipe(
        map(paymentIntent => PaymentActions.createPaymentIntentSuccess({ paymentIntent })),
        catchError(error => of(PaymentActions.createPaymentIntentFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private paymentService: PaymentService
  ) {}
}
