import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './product-card/product-card.component';




@NgModule({
  declarations: [
    ProductdetailsComponent,
    AddproductComponent,
    ProductlistComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  

  ],
  exports:[
    ProductdetailsComponent,
    AddproductComponent,
    ProductlistComponent,
    ProductCardComponent
  ]
})
export class ProductModule {
  constructor(){
    console.log("Product Module imported !!")
  }
 }
