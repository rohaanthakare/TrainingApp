import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): any {
    return this.http.get('assets/data/users.json');
  }

  public saveUser(userData): any {
    return this.http.post('api/saveUser', userData);
  }
}
