import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './user.reducer';
// ... import other reducers if you have any

export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  // ... other feature reducers
};

export * from '../Actions/user.actions';
export * from '../Effects/user.effects';
