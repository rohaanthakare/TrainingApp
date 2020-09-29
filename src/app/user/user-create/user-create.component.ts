import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

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
  styleUrls: ['./user-create.component.scss'],
  providers: [MessageService]
})
export class UserCreateComponent implements OnInit {
  userId: any;
  user: User = new User();
  roles = [
    {name: 'Admin', code: 'admin', test: 'System Admin'},
    {name: 'Teacher', code: 'teacher', test: 'Asst. Proff'},
    {name: 'Student', code: 'student', test: 'UG Student'}
  ];
  usernameCtrl = new FormControl('', [Validators.required]);
  passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  emailCtrl = new FormControl('', [Validators.required, Validators.email]);
  fullNameCtrl = new FormControl('', [Validators.required]);
  mobileNoCtrl = new FormControl('', [Validators.required]);
  dobCtrl = new FormControl('', [Validators.required]);
  roleCtrl = new FormControl('', [Validators.required]);
  deptCtrl = new FormControl('', [Validators.required]);
  userForm: FormGroup = this.formnBuilder.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl,
    email: this.emailCtrl,
    mobileNo: this.mobileNoCtrl,
    fullName: this.fullNameCtrl,
    role: this.roleCtrl,
    dob: this.dobCtrl,
    department: this.deptCtrl
  });
  departments = [];
  filteredDept = [];
  submitted = false;
  constructor(private formnBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute,
    private msgService: MessageService) { }

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

    this.userService.getDepartments().subscribe(
      (response: any) => {
        console.log('Inside get dept');
        console.log(response);
        this.departments = response.departments;
      }
    );
  }

  getUserDeatils() {
    this.userService.getUserDetail(this.userId).subscribe(
      response => {
        this.user = response.user;
        this.setFormData();
      }
    );
  }

  setFormData() {
    for (const fieldCtrl of Object.keys(this.userForm.controls)) {
      console.log(this.userForm.get(fieldCtrl));
      this.userForm.get(fieldCtrl).setValue(this.user[fieldCtrl]);
    }
  }

  createUser(): void {
    console.log('------User------');
    console.log(this.usernameCtrl);
    this.submitted = true;
    if (this.userForm.valid) {
    //   alert('Form is good to Save');
      this.userService.saveUser(this.userForm.value).subscribe(
        reponse => {
          this.msgService.add({
            severity: 'success',
            summary: 'Create User',
            detail: 'User created successfully'
          });
        },
        error => {
          this.msgService.add({
            severity: 'error',
            summary: 'Create Error',
            detail: 'Internal server error, please try after some time.'
          });
        }
      );
    } else {
      this.msgService.add({
        severity: 'error',
        summary: 'Create Error',
        detail: 'User can not be saved, form contains error'
      });      
    }
  }

  searchDept(event) {
    this.filteredDept = this.departments.filter((d) => {
      return d.name.includes(event.query);
    });
  }
}
