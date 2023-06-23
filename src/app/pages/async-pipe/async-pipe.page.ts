import { Component, OnInit } from '@angular/core';
import { Person, RandomUserService } from '../../services/random-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.page.html',
  styleUrls: ['./async-pipe.page.scss'],
})
export class AsyncPipePage implements OnInit {

  userList!: Observable<Person[]>;

  constructor(private userService: RandomUserService) {

  }

  ngOnInit() {
    this.userList = this.userService.getUsers();
  }

}
