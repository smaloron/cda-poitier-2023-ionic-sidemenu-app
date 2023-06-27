import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
export class PetsPage implements OnInit {

  public petList: any[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.http.get(
      'http://localhost:3000/pets'
    ).subscribe((data: any) => this.petList = data);
  }

}
