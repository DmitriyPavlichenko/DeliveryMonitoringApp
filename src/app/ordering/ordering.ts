import {ProductUnit} from "../product/productuint";

export interface Ordering {
  productUnitList: ProductUnit[];
  employeeUuid: string;
  departmentUuid: string;
}
