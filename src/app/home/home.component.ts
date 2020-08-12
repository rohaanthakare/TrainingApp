import { Component, OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
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
    console.log('Inside ngAfterViewInit');
  }

  ngDoCheck()  {
    console.log('Inside ngDoCheck');
    this.testPercentage = (this.testNumber / 100);
  }

  ngAfterContentInit() {
    console.log('Inside ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('Inside ngAfterViewChecked');
  }

  ngAfterContentChecked() {
    console.log('Inside ngAfterContentChecked');
  }

  ngOnChanges() {
    console.log('Inside ngOnChanges');
  }
}
