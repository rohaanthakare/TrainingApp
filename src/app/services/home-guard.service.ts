import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): any {
    console.log('------Home Gruard------');
    if (localStorage.getItem('username')) {
      this.router.navigate(['home']);
    }

    return true;
  }
}
