import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

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
  userId: any;
  user: User = new User();
  usernameCtrl = new FormControl('', [Validators.required]);
  passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  userForm: FormGroup = this.formnBuilder.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
    email: this.emailCtrl
  });
  constructor(private formnBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        if (params.get('user_id')) {
          console.log(params.get('user_id'));
          this.userId = params.get('user_id');
          console.log('This is edit page');
          this.getUserDeatils();
        } else {
          console.log('This is create page');
        }
      }
    );
  }

  getUserDeatils() {
    console.log('Inside getUserDetails');
    this.userService.getUsers().subscribe(
      response => {
        const users = response.users;
        this.user = users.find((tmp) => {
          if (tmp.id === this.userId) {
            return true;
          }
        });
      }
    );
  }

  createUser(): void {
    console.log('------User------');
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      alert('Form is good to Save');
      this.userService.saveUser(this.userForm.value).subscribe(
        reponse => {
          console.log('-----User Saved------');
        },
        error => {
          console.log('-----Error while Saving User------');
        }
      );
    } else {
      alert('Form Contains Error');
    }
  }
}
