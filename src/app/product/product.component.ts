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


  public printReport(): void {
      let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
      let tableSelect = document.getElementById('products');
      console.log(tableSelect)
      let tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');
      console.log(tableHtml)
      let downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
      downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
      downloadLink.download = 'product-report.xls'
      downloadLink.click();
      document.body.removeChild(downloadLink)
  }

  ngOnInit(): void {
    this.productService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value)
    this.getProducts()
  }
}
