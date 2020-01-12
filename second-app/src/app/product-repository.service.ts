import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { strictEqual } from 'assert';
import { HttpClient } from '@angular/common/http';

export class Product {
  constructor(
    public name: string,
    public price: number,
    public category: string,
    public id?: number
  ) {}
}

@Injectable()
export class ProductRepositoryService {

  public productSource$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public productList = [];

  public count: number = 11;

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/products/${id}`)
  }

  public addProduct(body: Product): Observable<void>  {
    return this.http.post<void>('http://localhost:3000/products', body);
  }

  public editProduct(body: Product): Observable<void>  {
    return this.http.put<void>(`http://localhost:3000/products/${body.id}`, body);
  }

  // public createProduct(obj) {
   
  //   let newObj = {
  //     id: this.count,
  //     name: obj.value.name,
  //     price: obj.value.price,
  //     category: obj.value.category
  //   };
  //   if(this.count > 10){
  //     this.count++
  //   }
  //   this.productList.push(newObj);
  //   //this.productList = this.productList;
  //   this.productSource$.next(this.productList);
  //   console.log(this.productList);
  // }  
}
