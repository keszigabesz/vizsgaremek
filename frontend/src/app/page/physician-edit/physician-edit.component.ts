import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Physician } from 'src/app/model/physician';
import { PhysicianService } from 'src/app/service/physician.service';

@Component({
  selector: 'app-physician-edit',
  templateUrl: './physician-edit.component.html',
  styleUrls: ['./physician-edit.component.scss'],
})
export class PhysicianEditComponent implements OnInit {
  physician$!: Observable<Physician>;
  physician: Physician = new Physician();

  constructor(
    private physicianService: PhysicianService,
    private ar: ActivatedRoute,
    private router: Router
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
      physician.id !== 0
        ? this.physicianService.update(physician)
        : this.physicianService.create(physician);
    crudObservable.subscribe((result) => {
      this.router.navigate(['/', 'physician']);
    });
  }
}
