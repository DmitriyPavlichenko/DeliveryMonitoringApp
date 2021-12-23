import {Component, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {OrderingService} from "@app/ordering/ordering.service";
import {RequestOrdering} from "@app/ordering/requestOrdering";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ResponseOrdering} from "@app/ordering/ResponseOrdering";

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {
  constructor(private orderingService: OrderingService) { }

  ordering: ResponseOrdering;
  public getOrdering(name: string): void {
    this.orderingService.getOrdering(name).subscribe(
      (response: ResponseOrdering) => {
        this.ordering = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  orderings: ResponseOrdering[];
  public getOrderings(): void {
    this.orderingService.getOrderings().subscribe(
      (response: ResponseOrdering[]) => {
        this.orderings = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addOrdering(ordering: RequestOrdering): void {
    this.orderingService.addOrdering(ordering);
  }

  public deleteOrdering(name: string): void {
    this.orderingService.deleteOrdering(name);
  }


  ngOnInit(): void {
    this.orderingService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value)
    this.getOrderings();
  }
}
