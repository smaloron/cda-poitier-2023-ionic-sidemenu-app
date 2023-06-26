import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  persons = [
    { name: "Olaf", age: "43" },
    { name: "Olivia", age: "11" },
    { name: "Ovide", age: "96" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
