import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './Reducers/user.reducer';

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  // ... other feature reducers
};

export * from './Actions/user.actions';
export * from './Effects/user.effects';
