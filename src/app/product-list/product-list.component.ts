import { Component, OnInit } from '@angular/core';

import { Product} from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
