import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Pipe({
  name: 'favorite',
  pure: false
})
export class FavoritePipe implements PipeTransform {

  constructor(private productService: ProductService) { }

  transform(products: Product[], args?: any): Product[] {
    return products ? products.filter(product => this.productService.checkFavorite(product)) : null;
  }

}
