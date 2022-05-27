import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Physician } from 'src/app/model/physician';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss']
})
export class ListingTableComponent implements OnInit {

  @Input() list$ = new Observable;
  @Input() keys = [''];

  constructor() { }

  ngOnInit(): void {
  }

}
