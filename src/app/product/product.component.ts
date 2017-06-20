import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() favorite: boolean;
  @Output() changeFavorite = new EventEmitter<Product>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  imageUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.product.image);
  }

  toggleFavorite(): void {
    this.changeFavorite.emit(this.product);
  }

}
