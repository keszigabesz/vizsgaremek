import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title: string = 'Kedves Felhasználó, Ön belépett a Micro-Lab adminisztrációs felületére!';
  text: string =
    'Kérjük, hogy a laboratórium adminisztrációs rendszerében az adatokat nagy körültekintéssel kezelje! Köszönettel: a Micro-Lab vezetősége.';

  constructor() { }

  ngOnInit(): void {
  }

}
