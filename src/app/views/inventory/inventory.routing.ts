import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from "./product-add/product-add.component";

export const InventoryRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'product-list',
      component: ProductListComponent
    }, {
      path: 'product-add',
      component: ProductAddComponent
    }]
  }
];
