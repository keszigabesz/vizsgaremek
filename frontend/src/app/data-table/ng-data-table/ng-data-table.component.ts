import { Component, Input, OnInit } from '@angular/core';

export interface INgTableColumn {
  title: string;
  key: string;
}
@Component({
  selector: 'ng-data-table',
  templateUrl: './ng-data-table.component.html',
  styleUrls: ['./ng-data-table.component.scss'],
}) // string tipusu kulcsok is lehetnek
export class NgDataTableComponent<T extends { [x: string]: any }>
  implements OnInit
{
  // data
  @Input() list: T[] = [];
  @Input() columns: any[] = [];

  // filter
  phrase: string = '';
  filterKey: string = '';

  // paging
  pageSize: number = 10;
  startSlice: number = 0;
  endSlice: number = 10;
  page: number = 1;
  get pageList(): number[] {
    const pageSize = Math.ceil(this.list.length / this.pageSize);
    return new Array(pageSize).fill(1).map((item, index) => index + 1);
  }

  constructor() {}

  ngOnInit(): void {}

  // paging
  jumpToPage(pageNum: number): void {
    this.page = pageNum;
    this.startSlice = this.pageSize * (pageNum - 1);
    this.endSlice = this.startSlice + this.pageSize;
  }
}
