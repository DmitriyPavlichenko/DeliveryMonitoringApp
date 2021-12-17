import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProduct(name: String): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}api/v1/supply/product/find?${name}`);
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}api/v1/supply/product/findall`);
  }

  /*public addProducts(product: Product) {
    this.http.post(`${this.apiServerUrl}api/v1/supply/product`, product);
  }

  public deleteProduct(name: string) {
    this.http.delete(`${this.apiServerUrl}api/v1/supply/product?${name}`)
  }*/
}
