import {ProductUnit} from "@app/product/productuint";
import {Employee} from "@app/employee/employee";
import {Department} from "@app/department/department";

export interface ResponseOrdering {
  uuid: string;
  productUnitList: ProductUnit[];
  employee: Employee;
  department: Department;
  date: Date;
}
