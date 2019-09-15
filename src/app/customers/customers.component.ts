import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../models/customer.model';
import { DataService } from '../core/services/data.service';
import { IOrder } from '../models/order.model';
import { IOrderItem } from '../models/order-item.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.title = 'Customers';

    this.dataService.getOrders().subscribe((orders: IOrder[]) => {
      this.dataService.getCustomers().subscribe((customers: ICustomer[]) => {
        this.people = customers.map((customer: ICustomer) => {
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
