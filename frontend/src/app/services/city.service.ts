import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/city';

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.apiurl);
  }

  getCityById(id: any): Observable<City> {
    return this.http.get<City>(this.apiurl + '/' + id);
  }

  createCity(cityData: any) {
    return this.http.post(this.apiurl, cityData);
  }

  updateCity(id: any, cityData: any) {
    return this.http.put(this.apiurl + '/' + id, cityData);
  }

  removeCityById(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }
}
