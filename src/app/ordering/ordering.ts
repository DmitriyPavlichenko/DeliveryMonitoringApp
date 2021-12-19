import {ProductUnit} from "../product/productuint";

export interface Ordering {
  uuid: string;
  productUnitList: ProductUnit[];
  employeeUuid: string;
  departmentUuid: string;
}
