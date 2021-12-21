import {Component, OnInit} from '@angular/core';

import {User} from '@app/authorization/_models';
import {AuthenticationService} from "@app/authorization/_services";

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  loading = false;
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.user = authenticationService.userValue;
  }

  ngOnInit() {
    this.loading = true;
    /*
    some stuff
    */
  }
}
