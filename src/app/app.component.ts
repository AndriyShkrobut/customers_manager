import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { GetCustomers } from './store/actions/customer.actions';
import { GetOrders } from './store/actions/order.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _store: Store<IAppState>) {}
  title = 'test-app';

  ngOnInit() {
    this._store.dispatch(new GetCustomers());
    this._store.dispatch(new GetOrders());
  }
}
