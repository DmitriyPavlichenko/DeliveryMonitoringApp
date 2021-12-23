import {ProductUnit} from "./productunit";

export class RequestOrdering {
  private productUnitList: ProductUnit[];
  private employeeUuid: string;
  private departmentUuid: string;
  private date: Date;


  constructor(productUnitList: ProductUnit[], employeeUuid: string, departmentUuid: string, date: Date) {
    this.productUnitList = productUnitList;
    this.employeeUuid = employeeUuid;
    this.departmentUuid = departmentUuid;
    this.date = date;
  }
}
