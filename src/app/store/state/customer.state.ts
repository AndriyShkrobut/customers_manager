import { ICustomer } from 'src/app/models/customer.model';

export interface ICustomerState {
  customers: ICustomer[];
  customer?: ICustomer;
}

export const initialCustomerState: ICustomerState = {
  customers: [],
};
