export enum EmployeeRole {
  WAREHOUSE_WORKER = "WAREHOUSE_WORKER",
  PRODUCT_SUPPLIER = "PRODUCT_SUPPLIER",
  MANAGER = "MANAGER",
  ADMINISTRATOR = "ADMINISTRATOR"
}

export interface ResponseEmployee {
  uuid: string;
  firstName: string;
  lastName: string;
  role: EmployeeRole;
  phoneNumber: string;
}
