import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { CoreListComponent } from 'src/app/core/core-list/core-list.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  listTitle = 'Users';
  @ViewChild(CoreListComponent, {static: true}) listCmp: CoreListComponent;
  users = [];
  pageSize: any;
  pageNumber = 0;
  columns = [{
    header: 'Username',
    field: 'username',
    renderer: (row) => {
      console.log('---Inside Renderer---');
      console.log(row);
      console.log('---------------------');
      if (row.role && row.role === 'student') {
        return row.username;
      } else {
        return `<a href="home/users/edit/${row._id}">${row.username}</a>`;
      }
    }
  }, {
    header: 'Name',
    field: 'fullName'
  }, {
    header: 'Email',
    field: 'email',
    renderer: (row) => {
      console.log('---Inside Renderer---');
      console.log(row);
      console.log('---------------------');
      if (row.role && row.role === 'student') {
        return `<label class="error_class">${row.email}</label>`;
      } else {
        return `<label class="success_class">${row.email}</label>`;
      }
    }
  }, {
    header: 'Mobile No.',
    field: 'mobileNo'
  }, {
    header: 'Percentage',
    field: 'percentage'
  }, {
    header: 'Result',
    field: 'result',
    renderer: (row) => {
      console.log('---Inside Renderer---');
      console.log(row);
      console.log('---------------------');
      if (!row.percentage) {
        return '';
      }
      if (row.percentage && row.percentage >= 40) {
        return `<label class="success_class">Pass</label>`;
      } else {
        return `<label class="error_class">Fail</label>`;
      }
    }
  }];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.pageSize = this.listCmp.pageSize;
    this.getUsersList();
  }

  getUsersList() {
    this.userService.getUsers(this.pageNumber, this.pageSize).subscribe(
      response => {
        this.users = response.users;
        console.log('-----User List------');
        console.log(response);
        this.listCmp.setListData(this.users, response.total);
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

  navigateToPage(eventParams) {
    console.log('--inside navigate to Page');
    console.log(eventParams);
    this.pageNumber = eventParams;
    this.getUsersList();
  }
}
