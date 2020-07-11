import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

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
  usernameCtrl = new FormControl('', [Validators.required]);
  passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  userForm: FormGroup = this.formnBuilder.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
    email: this.emailCtrl
  });
  constructor(private formnBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
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
