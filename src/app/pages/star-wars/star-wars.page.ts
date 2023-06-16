import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.page.html',
  styleUrls: ['./star-wars.page.scss'],
})
export class StarWarsPage implements OnInit {

  isLoading = true;

  constructor(public swService: StarWarsService) { }

  ngOnInit() {
    this.swService.characterListChanged.subscribe(
      () => {
        console.log('changement');
        this.isLoading = false;
      }
    )
  }

}
