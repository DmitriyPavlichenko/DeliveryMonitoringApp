import {ProductUnit} from "@app/ordering/productunit";
import {ResponseEmployee} from "@app/employee/responseEmployee";
import {ResponseDepartment} from "@app/department/ResponseDepartment";

export interface ResponseOrdering {
  uuid: string;
  productUnitList: ProductUnit[];
  employee: ResponseEmployee;
  department: ResponseDepartment;
  date: Date;
}
