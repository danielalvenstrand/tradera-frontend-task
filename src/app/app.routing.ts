import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', loadChildren: './product-list/product-list.module#ProductListModule' },
  { path: 'favorites', loadChildren: './favorite-list/favorite-list.module#FavoriteListModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
