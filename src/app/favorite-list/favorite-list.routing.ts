import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteListComponent } from './favorite-list.component';

const routes: Routes = [
  { path: '', component: FavoriteListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
