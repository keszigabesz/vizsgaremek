import { Injectable } from '@angular/core';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
  class: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarMenu: IMenuItem[] = [
    {link: '/', title: 'Kezdőoldal', icon: 'home', class: ''},
    {link: '/test-card', title: 'Elérhető vizsgálatok',  icon: 'science', class: ''},
    {link: '/login', title: 'Bejelentkezés', icon: 'login', class: 'text-danger'},
  ];

  constructor() { }
}
