import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
