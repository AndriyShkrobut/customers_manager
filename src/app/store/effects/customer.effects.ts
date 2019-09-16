import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  GetCustomers,
  ECustomerActions,
  GetCustomersSuccess,
  GetCustomer,
  GetCustomerSuccess,
} from '../actions/customer.actions';
import { DataService } from 'src/app/core/services/data.service';

@Injectable()
export class CustomerEffects {
  @Effect()
  getCustomers$ = this._actions$.pipe(
    ofType<GetCustomers>(ECustomerActions.GetCustomers),
    switchMap(() => this._dataService.getCustomers()),
    switchMap(customers => of(new GetCustomersSuccess(customers)))
  );

  @Effect()
  getCustomer$ = this._actions$.pipe(
    ofType<GetCustomer>(ECustomerActions.GetCustomer),
    map(action => action.payload),
    switchMap(payload => this._dataService.getCustomerById(payload)),
    switchMap(customer => of(new GetCustomerSuccess(customer)))
  );

  constructor(private _dataService: DataService, private _actions$: Actions) {}
}
