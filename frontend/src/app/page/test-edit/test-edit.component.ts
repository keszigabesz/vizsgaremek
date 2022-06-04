import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.scss'],
})
export class TestEditComponent implements OnInit {
  test$!: Observable<Test>;
  test: Test = new Test();
  sidebarMenuItems: IMenuItem[] = this.config.adminSidebarMenu;

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private testService: TestService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe({
      next: (param) => (this.test$ = this.testService.get(param['id'])),
    });
    this.test$.subscribe({
      next: (test) => (this.test = test ? test : this.test),
    });
  }

  onSend(test: Test) {
    const crudObservable: Observable<any> =
      test.id !== 0
        ? this.testService.update(test)
        : this.testService.create(test);
    crudObservable.subscribe((result) => {
      this.router.navigate(['/', 'test']);
    });
  }
}
