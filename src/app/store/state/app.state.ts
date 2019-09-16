import { RouterReducerState } from '@ngrx/router-store';

import { ICustomerState, initialCustomerState } from './customer.state';
import { IOrderState, initialOrderState } from './order.state';

export interface IAppState {
  router?: RouterReducerState;
  customers: ICustomerState;
  orders: IOrderState;
}

export const initialAppState: IAppState = {
  customers: initialCustomerState,
  orders: initialOrderState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
