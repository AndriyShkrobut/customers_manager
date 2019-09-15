import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterInputComponent } from './customers-list/filter-input.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, CustomersRoutingModule],
  exports: [CustomersComponent],
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterInputComponent,
  ],
})
export class CustomersModule {}
