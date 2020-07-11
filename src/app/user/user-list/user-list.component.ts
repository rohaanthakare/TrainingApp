import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      response => {
        console.log('-----Users-----');
        console.log(response);
        this.users = response.users;
      }
    );
  }

  navigateToUserCreate(): void {
    this.router.navigate(['home/users/create']);
  }
}
