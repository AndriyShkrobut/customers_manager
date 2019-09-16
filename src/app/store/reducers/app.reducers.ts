import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';
import { customerReducers } from './customer.reducers';
import { orderReducers } from './order.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  customers: customerReducers,
  orders: orderReducers,
};
