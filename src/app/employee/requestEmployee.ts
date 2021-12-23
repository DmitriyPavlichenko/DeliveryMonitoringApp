import {EmployeeRole} from "@app/employee/responseEmployee";

export class RequestEmployee {
  firstName: string;
  lastName: string;
  role: EmployeeRole;
  phoneNumber: string;


  constructor(firstName: string, lastName: string, role: EmployeeRole, phoneNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.phoneNumber = phoneNumber;
  }
}
