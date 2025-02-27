import { Component } from '@angular/core';

@Component({
  selector: 'app-productcatalog',
  standalone: false,
  templateUrl: './productcatalog.component.html',
  styleUrl: './productcatalog.component.css'
})
export class ProductcatalogComponent {
  products:any[]=[
    {id:1,name:"p1",price:100},
    {id:2,name:"p2",price:100}]

}
