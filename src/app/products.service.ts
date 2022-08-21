import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { CartItem } from './models/cartIem';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartItems: CartItem[] = [];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../assets/data.json");
  }

   addToCart(item: CartItem) {
    for (let index = 0; index < this.cartItems.length; index++) {
      if (item.product.id === this.cartItems[index].product.id) {
        this.cartItems[index].count = item.count;
        console.log("CART: " + JSON.stringify(this.cartItems));
        return;
      }
    }
    this.cartItems.push(item);
    console.log("CART: " + JSON.stringify(this.cartItems));
  }
}
