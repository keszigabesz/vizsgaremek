import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sidebarMenuItems: IMenuItem[] = this.config.sidebarMenu;

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  }

}
