import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(pageNumber?: any, pageSize?: any): any {
    return this.http.get(`${environment.baseURL}/user/users`, {
      params: {
        page_number: pageNumber,
        page_size: pageSize
      }
    });
  }

  public getUserDetail(userId): any {
    return this.http.get(`${environment.baseURL}/user/user/${userId}`);
  }

  public saveUser(userData): any {
    return this.http.post(`${environment.baseURL}/user/user`, userData);
  }

  public authenticateUser(userData) {
    return this.http.post(`${environment.baseURL}/user/authenticate`, userData);
  }
}
