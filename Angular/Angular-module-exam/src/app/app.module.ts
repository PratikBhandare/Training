import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToggelDirective } from './app-toggel.directive';

import { ProductRoutingModule } from './Problem1/product-routing.module';
import { ProductModule } from './Problem1/product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AppToggelDirective,
    
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,

    // RouterModule,
    // ProductRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
