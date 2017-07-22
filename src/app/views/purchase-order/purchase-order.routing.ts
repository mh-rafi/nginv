import { Routes } from '@angular/router';

import { PoListComponent } from './po-list/po-list.component';
import { PoEditComponent } from './po-edit/po-edit.component';
import { PoAddComponent } from './po-add/po-add.component';

export const PoRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'list',
      component: PoListComponent
    }, {
      path: 'edit/:id',
      component: PoEditComponent
    }, {
      path: 'add',
      component: PoAddComponent
    }]
  }
];
