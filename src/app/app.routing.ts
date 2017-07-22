import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AuthService } from './services/auth/auth.service';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent, canActivate: [AuthService],
  children: [{
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'vendor',
    loadChildren: './views/vendors/vendors.module#VendorsModule'
  }, {
    path: 'purchase-order',
    loadChildren: './views/purchase-order/purchase-order.module#PurchaseOrderModule'
  }, {
    path: 'product',
    loadChildren: './views/products/products.module#ProductsModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './views/session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
