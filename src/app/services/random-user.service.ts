import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Person {
  latitude: number;
  longitude: number;
  fullName: string;
  address: string
}

const URL = 'https://randomuser.me/api?results=100&nat=fr';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  getPersonsFromAPI(response: any) {
    const data = response.results
    console.log(data);
    return data.map((item: any) => this.getOnePersonFromData(item));
  }

  getOnePersonFromData(item: any) {
    return {
      fullName: item.name.first + ' ' + item.name.last,
      latitude: item.location.coordinates.latitude,
      longitude: item.location.coordinates.longitude,
      address: item.location.street.number + ' ' + item.location.street.name + ' ' + item.location.postcode + ' ' + item.location.city
    };
  }

  public getUsers(): Observable<Person[]> {
    const request = this.http.get(URL);

    return request.pipe(
      map(response => this.getPersonsFromAPI(response))
    );
  }
}
