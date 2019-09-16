import { initialCustomerState, ICustomerState } from '../state/customer.state';
import { CustomerActions, ECustomerActions } from '../actions/customer.actions';

export const customerReducers = (
  state = initialCustomerState,
  action: CustomerActions
): ICustomerState => {
  const { type } = action;

  switch (type) {
    case ECustomerActions.GetCustomersSuccess:
      return {
        ...state,
        customers: action.payload,
      };
    case ECustomerActions.GetCustomerSuccess:
      return {
        ...state,
        customer: action.payload,
      };
    default:
      return state;
  }
};
