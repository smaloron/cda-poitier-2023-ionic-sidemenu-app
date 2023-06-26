import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {

  @Input() name = "Albert";
  @Input() age = "18";

  getBeverage() {
    const age = parseInt(this.age);
    return age >= 18 ? 'une bière' : 'un jus de fruit';
  }

  constructor() { }

  ngOnInit() { }

}
