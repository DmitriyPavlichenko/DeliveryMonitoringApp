enum EmployeeRole {
  WAREHOUSE_WORKER, PRODUCT_SUPPLIER, MANAGER, ADMINISTRATOR
}

export interface Employee {
  uuid: string;
  firstName: string;
  lastName: string;
  role: EmployeeRole;
  phoneNumber: string;
}
