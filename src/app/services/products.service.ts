import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getProductList() {
    return this.http.get(this.baseUrl, this.httpOptions);
  }
  getProductDetail(prodId) {
    return this.http.get(this.baseUrl + '/' + prodId, this.httpOptions);
  }
}
