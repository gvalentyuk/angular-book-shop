import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface SignUpCredentials {
  name: string;
  surname: string;
  dateOfBirthday: string;
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  surname: string,
  dateOfBirthday: string,
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  signup(credentials: SignUpCredentials) {
    return this.http
      .post<any>(
        'http://localhost:8080/api/auth/signup',
        credentials
      )
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
}
