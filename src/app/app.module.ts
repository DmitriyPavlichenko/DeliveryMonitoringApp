import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {BasicAuthInterceptor, ErrorInterceptor} from './authorization/_helpers';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegistrationComponent} from "@app/registration/registration.component";
import {DepartmentComponent} from "@app/department/department.component";
import {EmployeeComponent} from "@app/employee/employee.component";
import {OrderingComponent} from "@app/ordering/ordering.component";
import {ProductComponent} from "@app/product/product.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DepartmentComponent,
    EmployeeComponent,
    OrderingComponent,
    ProductComponent,
    RegistrationComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
