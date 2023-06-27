import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, CredentialInterface } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: CredentialInterface = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {
    auth.loginSubject.subscribe(
      (success) => {
        if (success) {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.credentials = {
      email: 'Olga@user.com',
      password: '123'
    };
  }

  login() {
    this.auth.login(this.credentials);
  }

}
