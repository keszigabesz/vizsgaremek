import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
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

  sidebarMenuItems: IMenuItem[] = this.config.sidebarMenu;

  currency: string = ' Ft';
  list$: Observable<Test[]> = this.testService.getAll();

  constructor(
    private testService: TestService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {}
}
