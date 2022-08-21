import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  numOfItems: number[] = Array(10);
  @Input() product: Product;
  amount: number = 1;
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getAmount();
  }
  addToCart(product: Product, countOfItems: string) {
    let count = parseInt(countOfItems);
    const cratItem = { product, count };
    this.service.addToCart(cratItem);
  }

  //num of  products in cart items
  getAmount() {
    for (let index = 0; index < this.service.cartItems.length; index++) {
      if (this.product.id === this.service.cartItems[index].product.id) {
        this.amount = this.service.cartItems[index].count;
      }
    }
  }
}
