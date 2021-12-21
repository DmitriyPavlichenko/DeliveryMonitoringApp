import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";
import {User} from "@app/authorization/_models";

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

  public getProduct(name: String): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}/api/v1/supply/product/find?${name}`, this.httpOptions);
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/api/v1/supply/product/findall`, this.httpOptions);
  }

  public addProducts(product: Product) {
    this.http.post(`${this.apiServerUrl}/api/v1/supply/product`, product, this.httpOptions);
  }

  public deleteProduct(name: string) {
    this.http.delete(`${this.apiServerUrl}/api/v1/supply/product?${name}`, this.httpOptions)
  }
}
