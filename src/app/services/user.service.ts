import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private cache: any = {};

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${page}`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }

  cacheUserDetails(users: any[]) {
    users.forEach(user => {
      this.cache[user.id] = user;
    });
  }

  getCachedUser(id: number) {
    return this.cache[id];
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }
