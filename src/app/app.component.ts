import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '@app/authorization/_models';
import {AuthenticationService} from '@app/authorization/_services';


@Component({selector: 'app', templateUrl: 'app.component.html'})
export class AppComponent {
  user: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authenticationService.logout();
  }

  hasAccess(requiredRoles: string[]): boolean {
    for (let role of requiredRoles) {
      if (this.user.employeeRole == role) {
        return true;
      }
    }
    return false;
  }
}
