import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {
  sidebar: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
