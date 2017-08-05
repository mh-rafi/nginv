import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AuthService } from './services/auth/auth.service';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
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
    path: 'inventory',
    loadChildren: './views/inventory/inventory.module#InventoryModule'
  }, {
    path: 'sales-order',
    loadChildren: './views/sales-order/sales-order.module#SalesOrderModule'
  }, {
    path: 'customer',
    loadChildren: './views/customers/customers.module#CustomersModule'
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
