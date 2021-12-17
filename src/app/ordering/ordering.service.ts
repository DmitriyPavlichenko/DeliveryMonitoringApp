import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ordering} from "./ordering";

@Injectable({
  providedIn: 'root'
})
export class OrderingService {
  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getOrdering(uuid: String): Observable<Ordering> {
    return this.http.get<Ordering>(`${this.apiServerUrl}api/v1/warehouse/ordering/find?${uuid}`);
  }

  public getOrderings(): Observable<Ordering[]> {
    return this.http.get<Ordering[]>(`${this.apiServerUrl}api/v1/warehouse/ordering/findall`);
  }

  public addOrdering(employee: Ordering) {
    this.http.post(`${this.apiServerUrl}api/v1/warehouse/ordering`, employee);
  }

  public deleteOrdering(uuid: string) {
    this.http.delete(`${this.apiServerUrl}api/v1/warehouse/ordering?${uuid}`)
  }
}
