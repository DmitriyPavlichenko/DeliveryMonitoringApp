import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppUser} from "./appUser";
import {User} from "@app/authorization/_models";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  apiServerUrl = environment.apiUrl;

  private httpOptions: { headers: HttpHeaders; }
  public authorize(user: User) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(user.username + ':' + user.password)
      })
    };
  }


  constructor(private http: HttpClient) { }

  public registerUser(user: AppUser) {
    this.http.post(`${this.apiServerUrl}/api/v1/registration`, user, this.httpOptions);
  }

  public deleteUser(uuid: string) {
    this.http.delete(`${this.apiServerUrl}/api/v1/registration${uuid}`, this.httpOptions)
  }
}
