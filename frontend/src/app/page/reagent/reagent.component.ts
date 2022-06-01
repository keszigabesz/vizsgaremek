import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reagent } from 'src/app/model/reagent';
import { ConfigService } from 'src/app/service/config.service';
import { ReagentService } from 'src/app/service/reagent.service';

@Component({
  selector: 'app-reagent',
  templateUrl: './reagent.component.html',
  styleUrls: ['./reagent.component.scss'],
})
export class ReagentComponent implements OnInit {
  columns = this.config.reagentTableColumns;
  list$: Observable<Reagent[]> = this.reagentService.getAll();

  constructor(
    private config: ConfigService,
    private reagentService: ReagentService
  ) {}

  ngOnInit(): void {}

  onDeleteOne(reagent: Reagent): void {
    this.reagentService
      .delete(reagent.id)
      .subscribe(() => (this.list$ = this.reagentService.getAll()));
  }
}
