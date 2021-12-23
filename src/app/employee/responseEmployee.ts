export enum EmployeeRole {
  WAREHOUSE_WORKER, PRODUCT_SUPPLIER, MANAGER, ADMINISTRATOR
}

export interface ResponseEmployee {
  uuid: string;
  firstName: string;
  lastName: string;
  role: EmployeeRole;
  phoneNumber: string;
}
