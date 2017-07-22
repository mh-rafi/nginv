import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';

export const ProductsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'list',
      component: ProductListComponent
    }]
  }
];
