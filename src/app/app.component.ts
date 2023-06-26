import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login', icon: 'log-in' },
    { title: 'Inscription', url: '/register', icon: 'person-add' },
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Liste des utilisateurs', url: '/user-list', icon: 'people' },
    { title: 'Star Wars', url: 'star-wars', icon: 'planet' },
    { title: 'Budget', url: 'budget', icon: 'cash' },
    { title: 'Camera', url: 'camera', icon: 'camera' },
    { title: 'Synthèse vocale', url: 'synthese-vocale', icon: 'musical-note' },
    { title: 'Géolocalisation', url: 'geolocation', icon: 'locate' },
    { title: 'Géolocalisation aléatoire', url: 'random-geoloc', icon: 'location' },
    { title: 'Pipe asynchrone', url: 'async-pipe', icon: 'hourglass' },
  ];
  constructor() { }
}
