import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model, Product } from './Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string="http://localhost:5000";

  model = new Model();

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
   return this.http.get<Product[]>(this.baseUrl+'/api/product');
  }

  addProduct(product: Product):Observable<Product>{
   return this.http.post<Product>(this.baseUrl+'/api/product',product);
  }

  updateProduct(product: Product){
    return this.http.put<Product>(this.baseUrl+'/api/product'+product.id,product);
  }
}
