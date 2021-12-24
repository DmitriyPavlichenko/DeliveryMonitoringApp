export class AppUser {
  employeeUuid: string;
  password: string;


  constructor(employeeUuid: string, password: string) {
    this.employeeUuid = employeeUuid;
    this.password = password;
  }
}
