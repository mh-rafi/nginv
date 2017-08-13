import { Routes } from '@angular/router';

import { CompanySetupComponent } from './company-setup/company-setup.component';
import { WarehouseSetupComponent } from './warehouse-setup/warehouse-setup.component';


export const SettingsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'company',
      component: CompanySetupComponent
    }, {
      path: 'warehouse',
      component: WarehouseSetupComponent
    }]
  }
];
