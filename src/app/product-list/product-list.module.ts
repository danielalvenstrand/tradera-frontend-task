import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { routing } from './product-list.routing';

import { ProductModule } from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ProductModule
  ],
  declarations: [ProductListComponent]
})
export class ProductListModule { }
