import { Component, OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  testText = 'Welcome to Agnular 7';
  testNumber = 78;
  testDate = new Date();
  testPercentage = (this.testNumber / 100);
  items: MenuItem[] = [{
    label: 'Users', icon: 'pi pi-fw pi-users',
    command: (event) => {
      this.navigateToPage('home/users');
    }
  }, {
    label: 'Departments', icon: 'pi pi-fw pi-download',
    command: (event) => {
      this.navigateToPage('home/departments');
    }
  }, {
    label: 'Employees', icon: 'pi pi-fw pi-refresh',
    command: (event) => {
      this.navigateToPage('home/employees');
    }
  }, {
    label: 'Students', icon: 'pi pi-fw pi-refresh',
    command: (event) => {
      this.navigateToPage('home/students');
    }
  }, {
    label: 'Courses', icon: 'pi pi-fw pi-refresh',
    command: (event) => {
      this.navigateToPage('home/courses');
    }
  }, {
    label: 'Logout', icon: 'pi pi-fw pi-sign-out',
    command: (event) => {
      this.navigateToPage('logout');
    }
  }];
  constructor(private router: Router) {
    // console.log('Inside constructor');
  }

  ngOnInit(): void {
    // console.log('Inside ngOnInit');
    setTimeout(() => {
      this.testNumber = 84;
    }, 10000);
  }
  navigateToPage(page): void {
    if (page === 'logout') {
      localStorage.clear();
      this.router.navigate(['']);
    } else {
      this.router.navigate([page]);
    }
  }

  ngAfterViewInit() {
    // console.log('Inside ngAfterViewInit');
  }

  ngDoCheck()  {
    // console.log('Inside ngDoCheck');
    this.testPercentage = (this.testNumber / 100);
  }

  ngAfterContentInit() {
    // console.log('Inside ngAfterContentInit');
  }

  ngAfterViewChecked() {
    // console.log('Inside ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    // console.log('Inside ngAfterContentChecked');
  }

  ngOnChanges() {
    // console.log('Inside ngOnChanges');
  }

  testFunction() {
    alert("good");
  }
}
