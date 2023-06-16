import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarWarsCharacter } from '../models/star-wars-models';

const URL = 'https://swapi.dev/api/people/';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  characterList: StarWarsCharacter[] = [];

  constructor(private http: HttpClient) {
    this.loadFromApi()
  }

  loadFromApi() {
    this.http.get(URL).subscribe(
      (response: any) => {
        for (const data of response.results) {
          let character = new StarWarsCharacter();
          character.hydrate(data);
          this.characterList.push(character);
        }

        console.log(this.characterList);
      }
    );
  }
}
