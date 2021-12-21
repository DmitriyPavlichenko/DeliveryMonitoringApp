import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AuthGuard} from './authorization/_helpers';
import {RegistrationComponent} from "@app/registration/registration.component";
import {OrderingComponent} from "@app/ordering/ordering.component";
import {ProductComponent} from "@app/product/product.component";
import {EmployeeComponent} from "@app/employee/employee.component";
import {DepartmentComponent} from "@app/department/department.component";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'ordering', component: OrderingComponent},
  {path: 'registration', component: RegistrationComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
