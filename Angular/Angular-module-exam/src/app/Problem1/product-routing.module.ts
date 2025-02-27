import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductcatalogComponent } from './productcatalog/productcatalog.component';
import { ProductComponent } from './product/product.component';

const routes:Routes=[
  
  // {path:'**',component:ProductComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
    
  ]
})
export class ProductRoutingModule { }
