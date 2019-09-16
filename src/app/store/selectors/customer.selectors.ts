import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ICustomerState } from '../state/customer.state';

const selectCustomers = (state: IAppState) => state.customers;

export const selectCustomerList = createSelector(
  selectCustomers,
  (state: ICustomerState) => state.customers
);

export const selectCustomer = createSelector(
  selectCustomers,
  (state: ICustomerState) => state.customer
);
