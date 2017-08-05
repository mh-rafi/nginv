import { Routes } from '@angular/router';

import { SoListComponent } from './so-list/so-list.component';


export const SoRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'list',
      component: SoListComponent
    }]
  }
];
