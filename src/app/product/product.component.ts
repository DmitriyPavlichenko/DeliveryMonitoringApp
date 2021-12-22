import {Component, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {Product} from "@app/product/product";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "@app/product/product.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) { }

  product: Product;
  public getProduct(name: string): void {
    this.productService.getProduct(name).subscribe(
      (response: Product) => {
        this.product = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  products: Product[];
  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addProduct(product: Product): void {
    this.productService.addProduct(product);
  }

  public deleteProduct(name: string): void {
    this.productService.deleteProduct(name);
  }


  ngOnInit(): void {
    this.productService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value)
  }
}
