import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/client';

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiurl);
  }

  getClientById(id: any): Observable<Client> {
    return this.http.get<Client>(this.apiurl + '/' + id);
  }

  createClient(clientData: any) {
    return this.http.post(this.apiurl, clientData);
  }

  updateClient(id: any, clientData: any) {
    return this.http.put(this.apiurl + '/' + id, clientData);
  }

  removeClientById(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

}
