import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartIem';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  numOfItems:number[]=Array(10);
  items:CartItem[];
  total:number=0;
  fullName:string;
  address:string;
  credit:string;
  constructor(private service:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.items=this.service.cartItems;
    this.getTotal();
  }

  addToCart(product:Product,countOfItems:string){
    let count = parseInt(countOfItems);
    const cratItem={product,count};
    this.service.addToCart(cratItem);
    this.getTotal();
  }
  
  getTotal(){
    this.total=0;
    for (let index = 0; index < this.items.length; index++) {
      this.total +=this.items[index].product.price * this.items[index].count;
    }
 }

 confirm(){
    if(this.credit.length==16 && Number(this.credit)){
      this.service.cartItems=[];
      this.router.navigate(['/confirm',this.fullName,this.total]);
      console.log(this.fullName+"  "+this.total);
    }else{
      alert("credit must be 16 digits");
    }
    
 }
}
