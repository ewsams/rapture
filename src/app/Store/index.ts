import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './Reducers/user.reducer';
import { reducer as paymentReducer, State as PaymentState } from './Reducers/payment.reducer'; 

export interface AppState {
  user: UserState;
  payment: PaymentState; 
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  payment: paymentReducer, 
};

export * from './Actions/user.actions';
export * from './Effects/user.effects';
export * from './Actions/payment.actions'; 
export * from './Effects/payment.effects';
