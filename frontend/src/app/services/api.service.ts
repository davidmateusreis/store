import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/product';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiurl);
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(this.apiurl + '/' + id);
  }

  createProduct(productData: any) {
    return this.http.post(this.apiurl, productData);
  }

  updateProduct(id: any, productData: any) {
    return this.http.put(this.apiurl + '/' + id, productData);
  }

  removeProductById(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

}
