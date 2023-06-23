import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Liste des utilisateurs', url: '/user-list', icon: 'people' },
    { title: 'Star Wars', url: 'star-wars', icon: 'planet' },
    { title: 'Budget', url: 'budget', icon: 'cash' },
    { title: 'Camera', url: 'camera', icon: 'camera' },
    { title: 'Synthèse vocale', url: 'synthese-vocale', icon: 'musical-note' },
    { title: 'Géolocalisation', url: 'geolocation', icon: 'locate' },
  ];
  constructor() { }
}
