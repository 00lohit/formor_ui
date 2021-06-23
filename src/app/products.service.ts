import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getProducts() {
    this.http.get('./../assets/data/products.json').subscribe(
      (res: any) => {
        this.product = res;
        console.log(this.product);
        return this.product;
      },
      (err: any) => console.log(err)
    );
  }
}
