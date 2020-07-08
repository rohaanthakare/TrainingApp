import { Component, OnInit } from '@angular/core';

export class User {
  username: string;
  password: string;
  emailId: string;
  mobileNo: string;
  name: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  createUser(): void {
    console.log('------User------');
    console.log(this.user);
  }
}
