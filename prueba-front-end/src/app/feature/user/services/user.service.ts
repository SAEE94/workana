import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/user');
  }

  public save(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/user', user);
  }

  public update(user: User): Observable<User> {
    return this.httpClient.put<User>(
      'http://localhost:3000/user/' + user.id,
      user
    );
  }
}
