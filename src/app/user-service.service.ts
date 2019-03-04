import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-details/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8090/currency';

  public getUsers(): Observable<User[]> {
    console.log('In service');
    alert('In service');
    return this.http.get<User[]>(this.url + '/users');
  }

  public createUser(user: User) {
    return this.http.post<User>(this.url + '/createUser', user);
  }

  public createDemoUser() {
    console.log('URL : ' + this.url);
    return this.http.get<User>(this.url + '/demoUser');
  }
}
