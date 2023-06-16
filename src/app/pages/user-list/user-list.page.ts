import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const URL = 'http://randomuser.me/api?results=10';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  userList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(URL).subscribe(
      (response: any) => {
        console.log(response);
        this.userList = response.results;
      }
    )
  }

}
