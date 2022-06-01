import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Physician } from 'src/app/model/physician';
import { ConfigService } from 'src/app/service/config.service';
import { PhysicianService } from 'src/app/service/physician.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.scss'],
})
export class PhysicianComponent implements OnInit {
  columns = this.config.physicianTableColumns;
  list$: Observable<Physician[]> = this.physicianService.getAll();
  editor: string = '/physician-edit/';
  constructor(
    private physicianService: PhysicianService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {}

  onDeleteOne(physician: Physician): void {
    this.physicianService
      .delete(physician.id)
      .subscribe(() => (this.list$ = this.physicianService.getAll()));
  }
}
