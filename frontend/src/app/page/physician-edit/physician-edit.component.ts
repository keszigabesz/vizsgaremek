import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Physician } from 'src/app/model/physician';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { PhysicianService } from 'src/app/service/physician.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-physician-edit',
  templateUrl: './physician-edit.component.html',
  styleUrls: ['./physician-edit.component.scss'],
})
export class PhysicianEditComponent implements OnInit {
  physician$!: Observable<Physician>;
  physician: Physician = new Physician();
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private physicianService: PhysicianService,
    private ar: ActivatedRoute,
    private router: Router,
    private config: ConfigService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe({
      next: (param) =>
        (this.physician$ = this.physicianService.get(param['id'])),
    });
    this.physician$.subscribe({
      next: (physician) =>
        (this.physician = physician ? physician : this.physician),
    });
  }

  onSend(physician: Physician) {
    const crudObservable: Observable<any> =
      physician._id
        ? this.physicianService.update(physician)
        : this.physicianService.create(physician);
    crudObservable.subscribe((result) => {
      this.toastr.success('Sikeres mentés.', '', {
        timeOut: 1800,
        positionClass: 'toast-top-right'
      });
      this.router.navigate(['/', 'physician']);
    });
  }
}
