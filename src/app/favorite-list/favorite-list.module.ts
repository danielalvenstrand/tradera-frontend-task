import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-list.component';
import { routing } from './favorite-list.routing';

import { PipesModule } from '../pipes/pipes.module';
import { ProductModule } from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ProductModule,
    PipesModule
  ],
  declarations: [FavoriteListComponent]
})
export class FavoriteListModule { }
