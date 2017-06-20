import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from '../product/product';

const _FAVORITES = 'favorites';

@Injectable()
export class ProductService {

  readonly PRODUCT_URL = 'assets/products.json';

  products: Product[];
  favorites: Product[] = [];

  constructor(private http: Http) {
    const favs = localStorage.getItem(_FAVORITES);
    this.favorites = favs ? JSON.parse(favs) : [];
  }

  getProducts(): Observable<Product[]> {
    return this.products ? new Observable(observer => observer.next(this.products)) : this.http.get(this.PRODUCT_URL)
      .map((res: Response) => {
        this.products = res.json()['products'];
        return this.products;
      });
  }

  checkFavorite(product: Product): boolean {
    return this.favorites.findIndex((fav: Product) => fav.id === product.id) > -1;
  }

  toggleFavorite(product: Product): void {
    const index = this.favorites.findIndex((fav: Product) => fav.id === product.id);
    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(product);
    }
    localStorage.setItem(_FAVORITES, JSON.stringify(this.favorites));
  }

  clearFavorites(): void {
    this.favorites = [];
    localStorage.setItem(_FAVORITES, JSON.stringify(this.favorites));
  }
}
