import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:3000/category';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiurl);
  }

  getCategoryById(id: any): Observable<Category> {
    return this.http.get<Category>(this.apiurl + '/' + id);
  }

  createCategory(categoryData: any) {
    return this.http.post(this.apiurl, categoryData);
  }

  updateCategory(id: any, categoryData: any) {
    return this.http.put(this.apiurl + '/' + id, categoryData);
  }

  removeCategoryById(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }
}
