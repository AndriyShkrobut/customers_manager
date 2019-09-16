import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../store/state/app.state';
import { ICustomer } from '../models/customer.model';
import { selectCustomerList } from '../store/selectors/customer.selectors';
import { IOrder } from '../models/order.model';
import { IOrderItem } from '../models/order-item.model';
import { selectOrdersList } from '../store/selectors/order.selectors';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  title: string;
  customers: ICustomer[];

  customers$: Observable<ICustomer[]> = this._store.pipe(
    select(selectCustomerList)
  );
  orders$: Observable<IOrder[]> = this._store.pipe(select(selectOrdersList));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this.title = 'Customers';

    this.customers$.subscribe((customers: ICustomer[]) => {
      this.orders$.subscribe((orders: IOrder[]) => {
        this.customers = customers.map((customer: ICustomer) => {
          const customerOrder = orders.find(
            (order: IOrder) => order.customerId === customer.id
          );

          if (customerOrder) {
            customer.orderTotal = customerOrder.orderItems.reduce(
              (total: number, orderItem: IOrderItem) => {
                return total + orderItem.productCost;
              },
              0
            );
          }
          return customer;
        });
      });
    });
  }
}
