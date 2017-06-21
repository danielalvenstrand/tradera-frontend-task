import { Component, OnInit} from '@angular/core';

import { Product} from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  products: Product[];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  favoriteSum(favorites): number {
    return favorites ? favorites
      .map((fav: Product) => fav.price)
      .reduce((a, b) => a + b, 0) : 0;
  }

}
