import { IOrder } from 'src/app/models/order.model';

export interface IOrderState {
  orders: IOrder[];
}

export const initialOrderState = {
  orders: [],
};
