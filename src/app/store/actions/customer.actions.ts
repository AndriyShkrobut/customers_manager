import { Action } from '@ngrx/store';
import { ICustomer } from 'src/app/models/customer.model';

export enum ECustomerActions {
  GetCustomers = ' [Customer] Get Customers',
  GetCustomersSuccess = ' [Customer] Get Customers Success',
  GetCustomer = ' [Customer] Get Customer',
  GetCustomerSuccess = ' [Customer] Get Customer Success',
}

export class GetCustomers implements Action {
  public readonly type = ECustomerActions.GetCustomers;

  constructor(public payload = null) {}
}

export class GetCustomersSuccess implements Action {
  public readonly type = ECustomerActions.GetCustomersSuccess;

  constructor(public payload: ICustomer[]) {}
}

export class GetCustomer implements Action {
  public readonly type = ECustomerActions.GetCustomer;

  constructor(public payload: number) {}
}

export class GetCustomerSuccess implements Action {
  public readonly type = ECustomerActions.GetCustomerSuccess;

  constructor(public payload: ICustomer) {}
}

export type CustomerActions =
  | GetCustomers
  | GetCustomersSuccess
  | GetCustomer
  | GetCustomerSuccess;
