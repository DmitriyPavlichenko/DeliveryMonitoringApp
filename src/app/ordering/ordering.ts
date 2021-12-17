import {Employee} from "../employee/employee";
import {Department} from "../department/department";
import {Product} from "../product/product";

export interface Ordering {
  id: number;
  uuid: string;
  products: Product[];
  employee: Employee;
  department: Department;
  date: Date;
}
