import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appointment} from "../models/Appointment";

const CLIENT_API = 'http://localhost:8081/api/client/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllPsys(): Observable<any>{
    return this.http.get(CLIENT_API + "psys")
  }

  getPsyById(id: number): Observable<any>{
    return this.http.get(CLIENT_API + "psy/" + id)
  }

  createAppointment(id: number, appointment: Appointment): Observable<any> {
    return this.http.post(CLIENT_API + "psy/" + id, appointment)
  }

  getCurrentAppointments(): Observable<any>{
    return this.http.get(CLIENT_API + "currentAppointments");
  }

  getFinishAppointments(): Observable<any>{
    return this.http.get(CLIENT_API + "finishApps")
  }

  getCloseAppointment(id: number): Observable<any>{
    return this.http.get(CLIENT_API + "closeApp/" + id)
  }

  closeAppointment(id: number | undefined, review: any): Observable<any>{
    return this.http.post(CLIENT_API + "closeApp/" + id, review);
  }

  getCurrentClient(): Observable<any>{
    return this.http.get(CLIENT_API + "myProfile")
  }

  updateClient(client: any): Observable<any>{
    return this.http.post(CLIENT_API + "myProfile", client)
  }

  uploadPhoto(file: File): Observable<any>{
    const uploadData = new FormData();
    uploadData.append('photo', file);

    return this.http.post(CLIENT_API + 'uploadPhoto', uploadData)
  }

  deletePhoto(): Observable<any>{
    return this.http.post(CLIENT_API + 'deletePhoto', null)
  }



}
