import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritePipe } from './favorite.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FavoritePipe],
  exports: [FavoritePipe]
})
export class PipesModule { }
