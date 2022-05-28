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
  currency: string = ' Ft';
  list$: Observable<Test[]> = this.testService.getAll();

  constructor(private testService: TestService) {}

  ngOnInit(): void {}
}
