import {Component, Input, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {Product} from "@app/product/product";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "@app/product/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() user: User;

  constructor(private productService: ProductService) { }

  public getProduct(name: string): Product {
    let product: Product;
    this.productService.getProduct(name).subscribe(
      (response: Product) => {
        product = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    return product;
  }

  public getProducts(): Product[] {
    let products: Product[];
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    return products;
  }

  public addProduct(product: Product): void {
    this.productService.addProduct(product);
  }

  public deleteProduct(name: string): void {
    this.productService.deleteProduct(name);
  }


  ngOnInit(): void {
    this.productService.authorize(this.user)
  }
}
