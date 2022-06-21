import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { Physician } from 'src/app/model/physician';
import { Sample } from 'src/app/model/sample';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { PatientService } from 'src/app/service/patient.service';
import { PhysicianService } from 'src/app/service/physician.service';
import { SampleService } from 'src/app/service/sample.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sample-edit',
  templateUrl: './sample-edit.component.html',
  styleUrls: ['./sample-edit.component.scss'],
})
export class SampleEditComponent implements OnInit {
  sample$: Observable<Sample> = new Observable();
  sample: Sample = new Sample();
  sampleTypes: any[] = this.configService.sampleTypes;
  patientList$: Observable<Patient[]> = this.patientService.getAll();
  patientList: Patient[] = [];
  physicianList$: Observable<Physician[]> = this.physicianService.getAll();
  physicianList: Physician[] = [];
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private sampleService: SampleService,
    private configService: ConfigService,
    private patientService: PatientService,
    private physicianService: PhysicianService,
    private config: ConfigService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.patientList$.subscribe({
      next: patients => this.patientList = patients
    });
    this.physicianList$.subscribe({
      next: physician => this.physicianList = physician
    });
    this.ar.params.subscribe({
      next: param => (this.sample$ = this.sampleService.get(param['id'])).subscribe({
        next: sample => this.sample = sample,
        error: error => console.log(error),
      })
    });
  }

  onSend(sample: Sample) {
    const crudObservable: Observable<any> =
      sample._id
        ? this.sampleService.update(sample)
        : this.sampleService.create(sample);
    crudObservable.subscribe((result) => {
      this.toastr.success('Sikeres mentés.', '');
      this.router.navigate(['/', 'sample']);
    });
  }
}
