import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products:Product[]=[];

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>
      this.products=data);
  }

}
