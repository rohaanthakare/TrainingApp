import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { CoreListComponent } from 'src/app/core/core-list/core-list.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  listTitle = 'Users';
  @ViewChild(CoreListComponent, {static: true}) listCmp: CoreListComponent;
  users = [];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response.users;
        this.listCmp.setListData(this.users);
      }
    );
  }

  navigateToUserCreate(): void {
    this.router.navigate(['home/users/create']);
  }

  createUserClicked() {
    alert('Create user clicked in User component');
  }

  navigateToUserEdit(eventParams) {
    console.log('User List Component');
    console.log(eventParams);
    this.router.navigate(['home/users/edit/' + eventParams.id]);
  }

  addDefaultUser() {
    this.users.push({
      "name": "Default User",
      "id": "USR999",
      "username": "default",
      "role": "student",
      "password": "123456"
    });
  }
}
