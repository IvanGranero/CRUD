import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User } from '../data/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiURL = "http://iacenter.victortalamantes.com/user";
  lastid:number = 0;

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiURL}s`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiURL, user, httpOptions);
  }
  
}
