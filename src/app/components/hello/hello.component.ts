import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {

  @Input() name = "Albert";
  @Input() age = "18";
  @Output() doClick: EventEmitter<number>;
  clickCount = 0;

  constructor() {
    this.doClick = new EventEmitter<number>();
  }

  getBeverage() {
    const age = parseInt(this.age);
    return age >= 18 ? 'une bière' : 'un jus de fruit';
  }

  ngOnInit() { }

  updateClickCount() {
    this.clickCount++;
    this.doClick.emit(this.clickCount);
  }

}
