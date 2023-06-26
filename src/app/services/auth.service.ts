import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const URL = 'http://localhost:3000/'

export interface UserInterface {
  username: string;
  id?: number;
  role: string;
  email: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;
  user!: any;

  registerSubject!: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.registerSubject = new Subject<boolean>();
  }

  register(userInfos: UserInterface) {
    this.http.post(URL + 'auth/register', userInfos)
      .subscribe((response: any) => {
        this.token = response.token;
        this.user = response.user;
        delete this.user.password;
        this.registerSubject.next(true);
      });
  }

  getNewUser(): UserInterface {
    return {
      username: '',
      email: '',
      role: 'user',
      password: ''
    }
  }
}
