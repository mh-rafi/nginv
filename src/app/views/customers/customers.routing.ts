import { Routes } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

export const CustomersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'list',
      component: CustomerListComponent
    }, {
      path: 'add',
      component: CustomerAddComponent
    }, {
      path: 'edit/:id',
      component: CustomerEditComponent
    }]
  }
];
