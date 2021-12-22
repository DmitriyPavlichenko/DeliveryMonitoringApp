import {Component, OnInit} from '@angular/core';
import {User} from "@app/authorization/_models";
import {OrderingService} from "@app/ordering/ordering.service";
import {Ordering} from "@app/ordering/ordering";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {
  constructor(private orderingService: OrderingService) { }

  ordering: Ordering;
  public getOrdering(name: string): void {
    this.orderingService.getOrdering(name).subscribe(
      (response: Ordering) => {
        this.ordering = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  orderings: Ordering[];
  public getOrderings(): void {
    this.orderingService.getOrderings().subscribe(
      (response: Ordering[]) => {
        this.orderings = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addOrdering(ordering: Ordering): void {
    this.orderingService.addOrdering(ordering);
  }

  public deleteOrdering(name: string): void {
    this.orderingService.deleteOrdering(name);
  }


  ngOnInit(): void {
    this.orderingService.authorize((new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')))).value)
  }
}
