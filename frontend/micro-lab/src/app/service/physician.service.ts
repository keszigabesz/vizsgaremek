import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Physician } from '../model/physician';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService extends BaseService<Physician> {

  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'physicians.json';
  }


}
