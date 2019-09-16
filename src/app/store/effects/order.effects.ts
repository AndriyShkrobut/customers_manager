import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import {
  GetOrders,
  EOrderActions,
  GetOrdersSuccess,
  GetOrdersByCustomerId,
  GetOrdersByCustomerIdSuccess,
} from '../actions/order.actions';
import { IOrder } from 'src/app/models/order.model';
import { DataService } from 'src/app/core/services/data.service';

@Injectable()
export class OrderEffects {
  @Effect()
  getOrders$ = this._actions$.pipe(
    ofType<GetOrders>(EOrderActions.GetOrders),
    switchMap(() => this._dataService.getOrders()),
    switchMap((orders: IOrder[]) => of(new GetOrdersSuccess(orders)))
  );

  @Effect()
  getOrdersByCustomerId$ = this._actions$.pipe(
    ofType<GetOrdersByCustomerId>(EOrderActions.GetOrdersByCustomerId),
    map(action => action.payload),
    switchMap((payload: number) =>
      this._dataService.getOrdersByCustomerId(payload)
    ),
    switchMap((orders: IOrder[]) =>
      of(new GetOrdersByCustomerIdSuccess(orders))
    )
  );

  constructor(private _dataService: DataService, private _actions$: Actions) {}
}
