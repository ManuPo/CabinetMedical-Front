import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]>{
    return this.http.get<Patient[]>(`${environment.url}/patients`);
  }

  getPatient(id: number): Observable<Patient>{
    return this.http.get<Patient>(`${environment.url}/patients/{id}`);
  }


}
