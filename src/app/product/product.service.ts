import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  public getProduct(name: String): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}api/v1/supply/product/find?${name}`, this.httpOptions);
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}api/v1/supply/product/findall`, this.httpOptions);
  }

  public addProducts(product: Product) {
    this.http.post(`${this.apiServerUrl}api/v1/supply/product`, product, this.httpOptions);
  }

  public deleteProduct(name: string) {
    this.http.delete(`${this.apiServerUrl}api/v1/supply/product?${name}`, this.httpOptions)
  }
}
