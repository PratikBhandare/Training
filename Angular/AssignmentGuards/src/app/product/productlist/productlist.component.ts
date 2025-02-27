import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ProductService } from '../product.service';
import { OrderService } from '../../order/order.service';
import { BehaviorSubject, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-productlist',
  standalone: false,
  
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit,OnChanges{
  sSubject=new BehaviorSubject<string>('')
  
  filterd!:any[];
  constructor(private authService:AuthService, private productService:ProductService,private orderService:OrderService){
    this.authService.loggedUser$.subscribe(val=>{
      this.loggedUser=val;
    })

    this.productService.filterdProducts.subscribe(val=>{
      this.filterd=val;
    })

    // Debouncing concept for search term result
    this.sSubject.pipe(debounceTime(500)).subscribe((val)=>{
      this.searchProduct(val);}
    )
    

  }

  loggedUser!:any;
  pdetails:boolean=false;
  products:any[]=[];
  filteredProducts:any[]=[];
  search!:string;
  searchSubject=new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.pdetails=this.authService.isAdmin;
    this.products=this.productService.products;
    console.log("productlist onit");
    // this.loggedUserEmail=this.authService.loggedUser.email;
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  // change(s:string){
  //   console.log(s);
  //   this.searchProduct(s);
    

  // }

  change(s:string){
    console.log(s);
    this.sSubject.next(s)

    

  }


  addToCart(id:number){
    this.productService.addToCart(id);
    console.log(this.orderService.cart)
  }

  searchProduct(name:string):void{
    this.productService.searchProduct(name);
    
    console.log(this.filterd)
  }

  log(){
    console.log("Hello !!");
  }
  
  

  

}
