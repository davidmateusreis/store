import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/state';

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.apiurl);
  }

  getStateById(id: any): Observable<State> {
    return this.http.get<State>(this.apiurl + '/' + id);
  }

  createState(stateData: any) {
    return this.http.post(this.apiurl, stateData);
  }

  updateState(id: any, stateData: any) {
    return this.http.put(this.apiurl + '/' + id, stateData);
  }

  removeStateById(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }
}
