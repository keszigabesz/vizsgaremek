import { INgTableColumn } from './../data-table/ng-data-table/ng-data-table.component';
import { Injectable } from '@angular/core';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
  class: string;
  iconClass: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  sidebarMenu: IMenuItem[] = [
    { link: '/', title: 'Kezdőoldal', icon: 'home', class: '', iconClass: '' },
    {
      link: '/test-card',
      title: 'Elérhető vizsgálatok',
      icon: 'science',
      class: '',
      iconClass: '',
    },
    {
      link: '/login',
      title: 'Bejelentkezés',
      icon: 'login',
      class: 'text-danger',
      iconClass: 'icon-red',
    },
  ];
  adminSidebarMenu: IMenuItem[] = [
    {
      link: '/patient',
      title: 'Betegek',
      icon: 'person',
      class: '',
      iconClass: '',
    },
    {
      link: '/sample',
      title: 'Minták',
      icon: 'biotech',
      class: '',
      iconClass: '',
    },
    {
      link: '/physician',
      title: 'Orvosok',
      icon: 'person',
      class: '',
      iconClass: '',
    },
    {
      link: '/test',
      title: 'Vizsgálatok',
      icon: 'science',
      class: '',
      iconClass: '',
    },
    {
      link: '/reagent',
      title: 'Reagensek',
      icon: 'bloodtype',
      class: '',
      iconClass: '',
    },
    {
      link: '/logout',
      title: 'Kijelentkezés',
      icon: 'logout',
      class: 'text-danger',
      iconClass: 'icon-red',
    },
  ];

  patientTableColumns: INgTableColumn[] = [
    { key: 'id', title: '#' },
    { key: 'name', title: 'Név' },
    { key: 'taj', title: 'TAJ' },
    { key: 'birth_date', title: 'Szül. idő' },
    { key: 'mothers_name', title: 'Anyja neve' },
  ];

  constructor() {}
}
