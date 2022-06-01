import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss'],
})
export class PatientEditComponent implements OnInit {
  editedObject: Patient | undefined = undefined;
  edit: boolean = true;
  mainComponentRoute = 'patient';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private patientService: PatientService
  ) {
    this.ar.params
      .pipe(switchMap((params) => this.patientService.get(params['id'])))
      .subscribe((currentObject) => {
        if (
          currentObject === null ||
          currentObject === undefined ||
          currentObject.id < 1
        ) {
          this.edit = false;
          this.editedObject = new Patient();
        } else {
          this.editedObject = currentObject;
        }
      });
  }

  ngOnInit(): void {}

  onSend(editedObject: Patient) {
    const crudObservable: Observable<any> = this.edit
      ? this.patientService.update(editedObject)
      : this.patientService.create(editedObject);
    crudObservable.subscribe((result) => {
      this.router.navigate([this.mainComponentRoute]);
    });
  }
}
