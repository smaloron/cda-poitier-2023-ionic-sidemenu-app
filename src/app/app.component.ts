import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home', visible: true },
    { title: 'Liste des utilisateurs', url: '/user-list', icon: 'people', visible: true },
    { title: 'Star Wars', url: 'star-wars', icon: 'planet', visible: true },
    { title: 'Budget', url: 'budget', icon: 'cash', visible: true },
    { title: 'Camera', url: 'camera', icon: 'camera', visible: true },
    { title: 'Synthèse vocale', url: 'synthese-vocale', icon: 'musical-note', visible: true },
    { title: 'Géolocalisation', url: 'geolocation', icon: 'locate', visible: true },
    { title: 'Géolocalisation aléatoire', url: 'random-geoloc', icon: 'location', visible: true },
    { title: 'Pipe asynchrone', url: 'async-pipe', icon: 'hourglass', visible: true },
  ];


  constructor(public auth: AuthService) {
  }


}
