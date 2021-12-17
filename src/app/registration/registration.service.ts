import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AppUser} from "./appUser";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public registerUser(user: AppUser) {
    this.http.post(`${this.apiServerUrl}api/v1/registration`, user);
  }

  public deleteUser(id: number) {
    this.http.delete(`${this.apiServerUrl}api/v1/registration${id}`)
  }
}
