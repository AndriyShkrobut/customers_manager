import { Action } from '@ngrx/store';
import { IOrder } from 'src/app/models/order.model';

export enum EOrderActions {
  GetOrders = '[Order] Get Orders',
  GetOrdersSuccess = '[Order] Get Orders Success',
  GetOrdersByCustomerId = '[Order] Get Orders By Customer Id',
  GetOrdersByCustomerIdSuccess = '[Order] Get Orders By Customer Id Success',
}

export class GetOrders implements Action {
  public readonly type = EOrderActions.GetOrders;

  constructor(public payload = null) {}
}

export class GetOrdersSuccess implements Action {
  public readonly type = EOrderActions.GetOrdersSuccess;

  constructor(public payload: IOrder[]) {}
}

export class GetOrdersByCustomerId implements Action {
  public readonly type = EOrderActions.GetOrdersByCustomerId;

  constructor(public payload: number) {}
}

export class GetOrdersByCustomerIdSuccess implements Action {
  public readonly type = EOrderActions.GetOrdersByCustomerIdSuccess;

  constructor(public payload: IOrder[]) {}
}

export type OrderActions =
  | GetOrders
  | GetOrdersSuccess
  | GetOrdersByCustomerId
  | GetOrdersByCustomerIdSuccess;
