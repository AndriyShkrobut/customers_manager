import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {
  property: string = null;
  direction = 1;

  sort(collection: any[], prop: string) {
    this.property = prop;
    this.direction = this.property === prop ? this.direction * -1 : 1;
    collection.sort((a: any, b: any) => {
      let aValue: any;
      let bValue: any;

      if (prop && prop.includes('.')) {
        aValue = this.resolveProperty(prop, a);
        bValue = this.resolveProperty(prop, b);
      } else {
        aValue = a[prop];
        bValue = b[prop];
      }

      if (this.isString(aValue)) {
        aValue = aValue.trim().toUpperCase();
      }
      if (this.isString(bValue)) {
        bValue = bValue.trim().toUpperCase();
      }

      if (aValue === bValue) {
        return 0;
      } else if (aValue > bValue) {
        return this.direction * -1;
      } else {
        return this.direction * 1;
      }
    });
  }

  isString(value: any): boolean {
    return value && (typeof value === 'string' || value instanceof String);
  }

  resolveProperty(path: string, obj: any) {
    return path.split('.').reduce((prev, current) => {
      return prev ? prev[current] : undefined;
    }, obj || self);
  }
}
