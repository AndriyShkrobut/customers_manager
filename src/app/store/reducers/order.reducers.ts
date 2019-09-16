import { initialOrderState, IOrderState } from '../state/order.state';
import { OrderActions, EOrderActions } from '../actions/order.actions';

export const orderReducers = (
  state = initialOrderState,
  action: OrderActions
): IOrderState => {
  const { type } = action;

  switch (type) {
    case EOrderActions.GetOrdersSuccess:
      return { ...state, orders: action.payload };
    case EOrderActions.GetOrdersByCustomerIdSuccess:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
