import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from 'src/app/models/customer.model';
import { IOrder } from 'src/app/models/order.model';

@Injectable()
export class DataService {
  baseUrl = 'assets/';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(catchError(this.handleError));
  }

  getCustomerById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json').pipe(
      map(customers => {
        const result = customers.filter(
          (customer: ICustomer) => customer.id === id
        );
        return result && result.length ? result[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  getOrders(): Observable<IOrder[]> {
    return this.http
      .get<IOrder[]>(this.baseUrl + 'orders.json')
      .pipe(catchError(this.handleError));
  }

  getOrdersByCustomerId(customerId: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json').pipe(
      map(orders => {
        return orders.filter(
          (order: IOrder) => order.customerId === customerId
        );
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('server error: ', error);
    if (error.error instanceof Error) {
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
