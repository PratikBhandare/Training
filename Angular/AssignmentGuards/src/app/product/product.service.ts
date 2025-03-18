import { Injectable, OnInit } from '@angular/core';
import { OrderService } from '../order/order.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';


interface cart {
  [key: string]: any[]
}
@Injectable({
  providedIn: 'root'
})


export class ProductService implements OnInit {
  p:any[]=[]
  a!:any;

  loggedUser!: any;
  isLogged!: boolean;

  constructor(private authservice: AuthService, private router: Router, private http:HttpClient) {
    this.authservice.loggedUser$.subscribe(val => {
      this.loggedUser = val;
    },(err)=>{console.log(err);
    })
    this.authservice.isLogged$.subscribe(val => {
      this.isLogged = val;
    },(err)=>{console.log(err);
    })

    this.http.get("https://fakestoreapi.com/products").subscribe((val)=>{
    this.a=val;console.log(this.a);
    this.products=[...this.products,...this.a];
    console.log(this.p);
    },(err)=>{
      console.log(err);
      
    },()=>{
      console.log("DOne....!!");
      
    });
    // console.log(this.a);
    

  }

  products: any[] = [
    { title: "P1", price: 10000, id: 1, image: "https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain" },
    { title: "P2", price: 10000, id: 2, image: "https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain" },
    { title: "P3", price: 10000, id: 3, image: "https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain" },
    
  ];


  cart: any[] = [];
  cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  filterdProductsSubject = new BehaviorSubject<any[]>([]);
  filterdProducts = this.filterdProductsSubject.asObservable();


  _cart: cart = {};

  cartsSubject = new BehaviorSubject<{}>({})

  addProduct(product: any) {
    this.products.push(product);
    console.log(this.products);
  }

  addToCart(id: number) {


    if (this.authservice.isLogged) {
      for (let i = 0; i < this.products.length; i++) {
        if (id === this.products[i].id) {

          for (let j = 0; j < this.cart.length; j++) {
            if (this.products[i].id === this.cart[j].id) {
              console.log("Repeat !!")
              if (confirm("Do you want To add Again?")) {
                this.cart[j].quantity++;
                this.cartSubject.next(this.cart);
                // this._cart[this.loggedUser.email]=[this.cart];
                this.cartsSubject.next(this._cart);
                console.log(this._cart);


                // alert("Alredy Added !!")
                return;

              } else {
                return;
              }


            }
          }
          this._cart[this.loggedUser.email] = [this.cart];
          console.log(this._cart);
          this.cartsSubject.next(this._cart);

          this.cart.push({ ...this.products[i], quantity: 1 });
          this.cartSubject.next(this.cart);

          alert("Added Succesfully !!")
          return
        }
      }

      console.log(this.cart);
    } else {
      alert("you need to log in First !!");
      this.router.navigate(["/login"])
    }
  }

  cartIncr(id: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (id === this.cart[i].id) {

        this.cart[i].quantity++;
      }
    }
  }

  cartDecr(id: number) {
    for (let i = 0; i < this.cart.length; i++) {
      if (id === this.cart[i].id) {
        if (this.cart[i].quantity == 0) {
          return;
        }
        this.cart[i].quantity--;
      }
    }
  }

  ngOnInit(): void {
    this.cart = []
    this.cartSubject.next(this.cart)
  }

  searchProduct(term: string) {
    let filter: any[] = [];


    for (let i = 0; i < this.products.length; i++) {
      // if(term.toLowerCase()===this.products[i].name.toLowerCase()){
      //   filter.push(this.products[i])
      //   this.filterdProductsSubject.next(filter);
      //   console.log("GOt");
      // }
      
      if ((this.products[i]).title.toLowerCase().includes(term.toLowerCase())) {
        filter.push(this.products[i])
        this.filterdProductsSubject.next(filter);
        console.log("GOt");
      }
    }



  }

}
