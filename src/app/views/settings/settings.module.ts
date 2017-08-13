import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { WarehouseSetupComponent } from './warehouse-setup/warehouse-setup.component';
import { SettingsRoutes } from "./settings.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(SettingsRoutes)
  ],
  declarations: [CompanySetupComponent, WarehouseSetupComponent]
})
export class SettingsModule { }
