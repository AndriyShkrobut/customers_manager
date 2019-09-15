import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../models/customer.model';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];

  constructor(private dataSevice: DataService) {}

  ngOnInit() {
    this.title = 'Customers';
    this.dataSevice
      .getCustomers()
      .subscribe((customers: ICustomer[]) => (this.people = customers));
  }
}
