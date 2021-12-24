import {Component, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {ResponseProduct} from "@app/product/responseProduct";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "@app/product/product.service";
import {BehaviorSubject} from "rxjs";
import {RequestProduct} from "@app/product/requestProduct";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService,
              private modalService: NgbModal) { }

  product: ResponseProduct;
  public getProduct(name: string): void {
    this.productService.getProduct(name).subscribe(
      (response: ResponseProduct) => {
        this.product = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  products: ResponseProduct[];
  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: ResponseProduct[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public saveProduct(form: NgForm): void {
    let product: RequestProduct = new RequestProduct(form.value.name, form.value.price);
    this.productService.addProduct(product).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteProduct(name: string): void {
    this.productService.deleteProduct(name).subscribe(
      null,
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  ngOnInit(): void {
    this.productService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value)
    this.getProducts()
  }
}
