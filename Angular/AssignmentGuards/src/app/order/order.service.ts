import { Injectable, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {

  constructor(private productService:ProductService) {

  }

  orders:any[]=[];
  cart:any[]=[];

  ngOnInit(): void {
    this.cart=this.productService.cart;
  }

  








}
