import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IOrder } from '../models/order.model';
import { ICustomer } from '../models/customer.model';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const customerId = +this.route.snapshot.paramMap.get('id');

    this.dataService
      .getOrdersByCustomerId(customerId)
      .subscribe((orders: IOrder[]) => {
        this.orders = orders;
      });

    this.dataService
      .getCustomerById(customerId)
      .subscribe((customer: ICustomer) => {
        this.customer = customer;
      });
  }
}
