import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Üdvözöljük a Micro-Lab oldalán!';
  text: string =
    'A Micro-Lab modern diagnosztikai szolgáltatásokat kínál - ezen belül rutin vizsgálatokat és speciális teszteket is. Célunk, hogy széles körben elérhetővé tegyük, költséghatékonyan, de a legmagasabb minőséget garantálva, a páciensek számára a labordiagnosztikai eljárásokat. Laboratóriumi vizsgálatok aznapi eredménnyel, az ország minden pontján.';

  constructor() {}

  ngOnInit(): void {}
}
