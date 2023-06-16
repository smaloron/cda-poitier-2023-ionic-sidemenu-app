import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarWarsCharacter } from '../models/star-wars-models';
import { Subject } from 'rxjs';

const URL = 'https://swapi.dev/api/people/';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  characterList: StarWarsCharacter[] = [];

  characterListChanged: Subject<boolean>;

  private nextUrl: string | null = null;
  private prevUrl: string | null = null;

  currentPageNumber = 1;

  totalPagesCount: number = 0;

  constructor(private http: HttpClient) {
    this.characterListChanged = new Subject<boolean>();
    this.loadFromApi(URL);
  }

  loadFromApi(url: any) {
    this.http.get(url).subscribe(
      (response: any) => {

        // Définition des données de navigation
        this.nextUrl = response.next;
        this.prevUrl = response.previous;
        this.totalPagesCount = Math.ceil(response.count / 10);

        // Chargement des données de l'appel API 
        // dans la structure de données du service

        // RAZ sur la liste des personnages
        this.characterList = [];
        for (const data of response.results) {
          let character = new StarWarsCharacter();
          character.hydrate(data);
          this.characterList.push(character);

          //Notification à tous les abonnés
          this.characterListChanged.next(true);
        }
      }
    );
  }

  loadNext() {
    if (this.hasNext()) {
      this.currentPageNumber++;
      this.loadFromApi(this.nextUrl);
    }
  }

  loadPrev() {
    if (this.hasPrevious()) {
      this.currentPageNumber--;
      this.loadFromApi(this.prevUrl);
    }
  }

  hasNext(): boolean {
    return this.nextUrl != null;
  }

  hasPrevious(): boolean {
    return this.prevUrl != null;
  }
}
