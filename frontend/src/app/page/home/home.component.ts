import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { StatisticService } from 'src/app/service/statistic.service';

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

  patientCount$: Observable<any> = this.statisticService.getCount('patient-count');
  physicianCount$: Observable<any> = this.statisticService.getCount('physician-count');
  testCount$: Observable<any> = this.statisticService.getCount('test-count');
  sampleCount$: Observable<any> = this.statisticService.getCount('sample-count');

  constructor(
    private statisticService: StatisticService,
    private config: ConfigService
  ) {}

  ngOnInit(): void { }
}
