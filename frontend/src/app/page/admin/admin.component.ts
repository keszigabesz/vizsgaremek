import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title: string = 'Kedves Felhasználó, Ön belépett a Micro-Lab adminisztrációs felületére!';
  text: string =
    'Kérjük, hogy a laboratórium adminisztrációs rendszerében az adatokat nagy körültekintéssel kezelje! Köszönettel: a Micro-Lab vezetősége.';

    sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
