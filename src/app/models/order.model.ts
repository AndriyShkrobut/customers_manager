import { IOrderItem } from './order-item.model';

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}
