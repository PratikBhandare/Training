import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: false,
  
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnChanges {
ngOnChanges(changes: SimpleChanges): void {
  // throw new Error('Method not implemented.');
}
@Input() filterd: any[]=[];
@Input() pdetails: any;
@Input() products!:any[];
addToCart(arg0: any) {
throw new Error('Method not implemented.');
}

}
