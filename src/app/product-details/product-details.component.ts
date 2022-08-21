import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  numOfItems:number[]=Array(10);
  amount:number=1;
  product:Product;
  constructor(private service:ProductsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        if (data[index].id=== parseInt(this.route.snapshot.paramMap.get('id'))){
          this.product=data[index];
          this.getAmount();
          break;
        }
      }
    });
    
  }
  
  addToCart(product:Product,countOfItems:string){
    let count = parseInt(countOfItems);
    const cratItem={product,count};
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
