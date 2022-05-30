import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
})
export class TestCardComponent implements OnInit {
  title: string = 'Aktuálisan elérhető vizsgálataink';
  text: string =
    'Itt találja a Micro-Lab által jelenleg végzett vizsgálatokat. Az elérhető vizsgálatok listáját folyamatosan bővítjük.';

  currency: string = ' Ft';
  list$: Observable<Test[]> = this.testService.getAll();

  constructor(private testService: TestService) {}

  ngOnInit(): void {}
}
