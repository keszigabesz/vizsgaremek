import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Physician } from 'src/app/model/physician';
import { Test } from 'src/app/model/test';
import { PhysicianService } from 'src/app/service/physician.service';
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

    testList$: Observable<Test[]> = this.testService.getAll();
    physicianList$: Observable<Physician[]> = this.physicianService.getAll();

  constructor(
    private testService: TestService,
    private physicianService: PhysicianService
  ) {}

  ngOnInit(): void {}
}
