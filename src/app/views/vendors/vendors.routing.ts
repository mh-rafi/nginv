import { Routes } from '@angular/router';

import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';

export const VendorsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'list',
      component: VendorListComponent
    }, {
      path: 'edit/:id',
      component: VendorEditComponent
    }, {
      path: 'add',
      component: VendorAddComponent
    }]
  }
];
