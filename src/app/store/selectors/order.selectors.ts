import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IOrderState } from '../state/order.state';

const selectOrders = (state: IAppState) => state.orders;

export const selectOrdersList = createSelector(
  selectOrders,
  (state: IOrderState) => state.orders
);
