import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { Physician } from 'src/app/model/physician';
import { Sample } from 'src/app/model/sample';
import { Test } from 'src/app/model/test';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { PatientService } from 'src/app/service/patient.service';
import { PhysicianService } from 'src/app/service/physician.service';
import { SampleService } from 'src/app/service/sample.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Üdvözöljük a Micro-Lab oldalán!';
  text: string =
    'A Micro-Lab modern diagnosztikai szolgáltatásokat kínál - ezen belül rutin vizsgálatokat és speciális teszteket is. Célunk, hogy széles körben elérhetővé tegyük, költséghatékonyan, de a legmagasabb minőséget garantálva, a páciensek számára a labordiagnosztikai eljárásokat. Laboratóriumi vizsgálatok aznapi eredménnyel, az ország minden pontján.';
  sidebarMenuItems: IMenuItem[] = this.config.sidebarMenu;

  testList$: Observable<Test[]> = this.testService.getAll();
  physicianList$: Observable<Physician[]> = this.physicianService.getAll();
  sampleList$: Observable<Sample[]> = this.sampleService.getAll();
  patientList$: Observable<Patient[]> = this.patientService.getAll();

  testCount: number = 0;

  constructor(
    private testService: TestService,
    private physicianService: PhysicianService,
    private sampleService: SampleService,
    private patientService: PatientService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.testList$.subscribe({
      next: (tests) => {
        this.testCount = tests.length;
      },
    });
  }
}
