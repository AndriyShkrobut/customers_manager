import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from 'src/app/models/customer.model';
import { SorterService } from 'src/app/core/services/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['../customers.component.scss'],
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal = 0;
  currencyCode = 'USD';

  constructor(private sorterService: SorterService) {}

  @Input()
  get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value && value.length) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrderTotal();
    }
  }

  ngOnInit() {}

  calculateOrderTotal() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach(
      (customer: ICustomer) => (this.customersOrderTotal += customer.orderTotal)
    );
  }

  filter(filterQuery: string) {
    if (filterQuery) {
      const lowerCasedFilterQuery = filterQuery.toLowerCase();
      this.filteredCustomers = this.customers.filter((customer: ICustomer) => {
        return (
          customer.name.toLowerCase().includes(lowerCasedFilterQuery) ||
          customer.city.toLowerCase().includes(lowerCasedFilterQuery)
        );
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrderTotal();
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}
