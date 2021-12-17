enum ApplicationUserRole {
  WAREHOUSE_WORKER, PRODUCT_SUPPLIER, MANAGER, ADMINISTRATOR
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  role: ApplicationUserRole;
  phoneNumber: string;
}
