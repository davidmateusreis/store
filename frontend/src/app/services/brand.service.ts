import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/brand';

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiurl);
  }

  getBrandById(id: any): Observable<Brand> {
    return this.http.get<Brand>(this.apiurl + '/' + id);
  }

  createBrand(brandData: any) {
    return this.http.post(this.apiurl, brandData);
  }

  updateBrand(id: any, brandData: any) {
    return this.http.put(this.apiurl + '/' + id, brandData);
  }

  removeBrandById(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }
}
