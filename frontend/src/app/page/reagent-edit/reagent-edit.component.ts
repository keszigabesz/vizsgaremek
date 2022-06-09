import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reagent } from 'src/app/model/reagent';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { ReagentService } from 'src/app/service/reagent.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reagent-edit',
  templateUrl: './reagent-edit.component.html',
  styleUrls: ['./reagent-edit.component.scss'],
})
export class ReagentEditComponent implements OnInit {
  reagent$!: Observable<Reagent>;
  reagent: Reagent = new Reagent();
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private reagentService: ReagentService,
    private config: ConfigService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe({
      next: (param) => (this.reagent$ = this.reagentService.get(param['_id'])),
    });
    this.reagent$.subscribe({
      next: (reagent) => (this.reagent = reagent ? reagent : this.reagent),
    });
  }

  onSend(reagent: Reagent) {
    const crudObservable: Observable<any> =
      reagent._id !== ''
        ? this.reagentService.update(reagent)
        : this.reagentService.create(reagent);
    crudObservable.subscribe((result) => {
      this.toastr.success('Sikeres mentés.', '', {
        timeOut: 1800,
        positionClass: 'toast-top-right'
      });
      this.router.navigate(['/', 'reagent']);
    });
  }
}
