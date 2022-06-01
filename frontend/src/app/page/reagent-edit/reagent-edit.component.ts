import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reagent } from 'src/app/model/reagent';
import { ReagentService } from 'src/app/service/reagent.service';

@Component({
  selector: 'app-reagent-edit',
  templateUrl: './reagent-edit.component.html',
  styleUrls: ['./reagent-edit.component.scss'],
})
export class ReagentEditComponent implements OnInit {
  reagent$!: Observable<Reagent>;
  reagent: Reagent = new Reagent();

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private reagentService: ReagentService
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe({
      next: (param) => (this.reagent$ = this.reagentService.get(param['id'])),
    });
    this.reagent$.subscribe({
      next: (reagent) => (this.reagent = reagent ? reagent : this.reagent),
    });
  }

  onSend(reagent: Reagent) {
    const crudObservable: Observable<any> =
      reagent.id !== 0
        ? this.reagentService.update(reagent)
        : this.reagentService.create(reagent);
    crudObservable.subscribe((result) => {
      this.router.navigate(['/', 'reagent']);
    });
  }
}
