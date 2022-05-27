import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Physician } from 'src/app/model/physician';
import { PhysicianService } from 'src/app/service/physician.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.scss']
})
export class PhysicianComponent implements OnInit {
keys: string[] = Object.keys(new Physician());
list$: Observable<Physician[]> = this.physicianService.getAll();
constructor(private physicianService: PhysicianService) {}


  ngOnInit(): void {
  }

}
