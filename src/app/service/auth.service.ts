import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/Client";

const AUTH_API = 'http://localhost:8081/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(client: any): Observable<any>{
    return this.http.post(AUTH_API + 'signin', {
      username: client.username,
      password: client.password
    });
  }

  public register(client: Client): Observable<any>{
    return this.http.post(AUTH_API + 'registration', client)
  }

  public activation(code: string): Observable<any>{
    return this.http.get(AUTH_API + 'activate/' + code);
  }
}
