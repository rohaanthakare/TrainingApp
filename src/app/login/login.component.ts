import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  authenticateUser() {
    const userData = {
      username: this.username,
      password: this.password
    };
    this.userService.authenticateUser(userData).subscribe(
      (response: any) => {
        console.log('-------User Authenticate--------');
        console.log(response);
        // alert('User Authenticated Successfully');
        localStorage.setItem('username', response.user.username);
        localStorage.setItem('user_id', response.user._id);
        this.navigateToHome();
        // const users = response.users;
        // let userFound = false;
        // for (let index = 0; index < users.length; index++) {
        //   if (users[index].username === this.username
        //     && users[index].password === this.password) {
        //       localStorage.setItem('username', users[index].username);
        //       localStorage.setItem('role', users[index].role);
        //       localStorage.setItem('department_id', users[index].department_id);
        //       userFound = true;
        //       break;
        //   }
        // }

        // if (userFound) {
        //   this.navigateToHome();   
        // } else {
        //   alert('Invalid username / password');
        // }
      },
      error => {
        alert('Error while authenticating User');
      }
    );
    // this.navigateToHome();
  }
}
