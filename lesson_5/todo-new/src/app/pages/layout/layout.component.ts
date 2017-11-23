import { Component, OnInit } from '@angular/core';

import { UsersDataService } from '../../services/users-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private usersDataService: UsersDataService
  ) { }

  ngOnInit() {
    this.usersDataService.getUsers();
  }

}
