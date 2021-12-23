import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseProduct} from "./responseProduct";
import {Observable} from "rxjs";
import {User} from "@app/authorization/_models";
import {RequestProduct} from "@app/product/requestProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  public getProduct(name: String): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>(`${this.apiServerUrl}/api/v1/supply/product/find?name=${name}`, this.httpOptions);
  }

  public getProducts(): Observable<ResponseProduct[]> {
    return this.http.get<ResponseProduct[]>(`${this.apiServerUrl}/api/v1/supply/product/findall`, this.httpOptions);
  }

  public addProduct(product: RequestProduct): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/api/v1/supply/product`, product, this.httpOptions);
  }

  public deleteProduct(name: string): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/api/v1/supply/product?name=${name}`, this.httpOptions)
  }
}
