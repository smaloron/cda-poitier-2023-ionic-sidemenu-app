import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const URL = 'https://randomuser.me/api';

interface UserSearch {
  numberOfResults: number;
  gender: string;
  nationality: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  userList: any[] = [];

  userDetails: any = null;

  search: UserSearch = {
    numberOfResults: 6,
    gender: 'male',
    nationality: 'dk'
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadMoreUsers();
  }

  getUser(index: number) {
    this.userDetails = this.userList[index];
    console.log(this.userDetails);
  }

  loadMoreUsers(even: any = null, prepend = false) {

    const search = new HttpParams()
      .set('results', this.search.numberOfResults)
      .set('gender', this.search.gender)
      .set('nat', this.search.nationality);

    this.http.get(URL, { params: search }).subscribe(
      (response: any) => {
        if (prepend) {
          this.userList = response.results.concat(this.userList);
        } else {
          this.userList = this.userList.concat(response.results);
        }
        if (even) {
          even.target.complete();
        }
      }
    );
  }

  searchUser() {
    this.userList = [];
    this.loadMoreUsers();
  }

}
