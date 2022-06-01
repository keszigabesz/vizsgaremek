import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { ConfigService } from 'src/app/service/config.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  columns = this.config.patientTableColumns;
  list$: Observable<Patient[]> = this.patientService.getAll();
  entity: string = 'patient';

  constructor(
    private config: ConfigService,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onDelete(patient: Patient): void {
    this.patientService
      .delete(patient.id)
      .subscribe(() => (this.list$ = this.patientService.getAll()));
  }

  onEdit(id: number): void {
    console.log(id);
    console.log(new Patient());
    this.router.navigate(['patient-edit', id]);
  }
}
