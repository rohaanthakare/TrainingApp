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
    this.userService.getUsers().subscribe(
      response => {
        console.log('-------User List--------');
        console.log(response);
        const users = response.users;
        let userFound = false;
        for (let index = 0; index < users.length; index++) {
          if (users[index].username === this.username
            && users[index].password === this.password) {
              localStorage.setItem('username', users[index].username);
              localStorage.setItem('role', users[index].role);
              userFound = true;
              break;
          }
        }

        if (userFound) {
          this.navigateToHome();   
        } else {
          alert('Invalid username / password');
        }
      }
    );
    // this.navigateToHome();
  }
}
