import {EmployeeRole} from "@app/employee/responseEmployee";

export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  employeeRole: EmployeeRole;
  locked: boolean;
  enabled: boolean;
  authdata?: string;
}
