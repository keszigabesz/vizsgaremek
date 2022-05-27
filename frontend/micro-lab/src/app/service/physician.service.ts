import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Physician } from '../model/physician';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  apiUrl: string = environment.apiUrl;
  endPoint: string = 'physicians.json';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Physician[]> {
    return this.http.get<Physician[]>(`${this.apiUrl}${this.endPoint}`);
  }

}
