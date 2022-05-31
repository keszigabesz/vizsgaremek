import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss'],
})
export class ListingTableComponent implements OnInit {
  @Input() list$: Observable<any> = of([]);
  @Input() keys = [''];
  phrase: string = '';
  filterKey: string = '';

  constructor() {}

  ngOnInit(): void {}
}
