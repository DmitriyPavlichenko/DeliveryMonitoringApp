import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login: string = "";
  public password: string = "";

  constructor() { }


  setCredentials() {

  }
}
