import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss'],
})
export class PatientEditComponent implements OnInit {
  patient$!: Observable<Patient>;
  patient: Patient = new Patient();

  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private patientService: PatientService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe({
      next: (param) => (this.patient$ = this.patientService.get(param['id'])),
    });
    this.patient$.subscribe({
      next: (patient) => (this.patient = patient ? patient : this.patient),
    });
  }

  onSend(patient: Patient) {
    const crudObservable: Observable<any> =
      patient.id !== 0
        ? this.patientService.update(patient)
        : this.patientService.create(patient);
    crudObservable.subscribe((result) => {
      this.router.navigate(['/', 'patient']);
    });
  }
}
