import {Component, OnInit} from '@angular/core';

import {User} from '@app/authorization/_models';
import {AuthenticationService} from "@app/authorization/_services";

@Component({templateUrl: 'home.component.html',
            styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {
  loading = true;
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.user = authenticationService.userValue;
  }

  ngOnInit() {
    this.loading = false;
    /*
    some stuff
    */
  }
}
