import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  template: `
    <label>
      Filter:
      <input type="text" [(ngModel)]="filter" />
    </label>
  `,
})
export class FilterInputComponent implements OnInit {
  private _filter: string;

  @Input()
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    this.changed.emit(this.filter);
  }

  @Output()
  changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
