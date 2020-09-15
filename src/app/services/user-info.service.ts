import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log('Inside User Info Interceptor');
    // console.log(req);
    if (localStorage.getItem('username')) {
      // console.log('Local Storage is set.');
      req = req.clone({
        setHeaders: {
          username: localStorage.getItem('username')//,
          // department_id: localStorage.getItem('department_id')
        }
      })
    }
    return next.handle(req);
  }
}
