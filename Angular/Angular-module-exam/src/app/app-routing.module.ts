import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Problem1/product/product.component';
import { ProductcatalogComponent } from './Problem1/productcatalog/productcatalog.component';

const routes: Routes = [
  {path:'productcatalog',component:ProductcatalogComponent},
  {path:'productitem',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
