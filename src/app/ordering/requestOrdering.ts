import {ProductUnit} from "../product/productuint";

export interface RequestOrdering {
  productUnitList: ProductUnit[];
  employeeUuid: string;
  departmentUuid: string;
}
