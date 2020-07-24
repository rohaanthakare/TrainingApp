import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor() { }

  canActivate(): any {
    if (localStorage.getItem('role') === 'student') {
      alert('You are not authorize to access this page');
      return false;
    }

    return true;
  }
}
