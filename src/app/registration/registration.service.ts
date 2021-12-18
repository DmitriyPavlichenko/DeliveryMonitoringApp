import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppUser} from "./appUser";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  apiServerUrl = environment.apiBaseUrl;

  private httpOptions: { headers: HttpHeaders; } | undefined
  public authorize(login: string | undefined, password: string | undefined) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(login + ':' + password)
      })
    };
  }


  constructor(private http: HttpClient) { }

  public registerUser(user: AppUser) {
    this.http.post(`${this.apiServerUrl}api/v1/registration`, user, this.httpOptions);
  }

  public deleteUser(id: number) {
    this.http.delete(`${this.apiServerUrl}api/v1/registration${id}`, this.httpOptions)
  }
}
