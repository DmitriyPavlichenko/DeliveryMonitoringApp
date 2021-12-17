import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {DepartmentComponent} from "./department/department.component";
import {EmployeeComponent} from "./employee/employee.component";
import {ProductComponent} from "./product/product.component";
import {OrderingComponent} from "./ordering/ordering.component";
import {RegistrationComponent} from "./registration/registration.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'ordering', component: OrderingComponent },
  { path: 'registration', component: RegistrationComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentComponent, EmployeeComponent, ProductComponent, OrderingComponent, RegistrationComponent, IndexComponent]
