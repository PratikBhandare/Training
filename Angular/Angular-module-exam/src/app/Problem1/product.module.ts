import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductcatalogComponent } from './productcatalog/productcatalog.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ProductComponent,ProductcatalogComponent],
  imports: [
    // CommonModule,ProductRoutingModule
    CommonModule
  ],
  exports:[ProductComponent,ProductcatalogComponent]
})
export class ProductModule { }
