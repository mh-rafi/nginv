import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { SoListComponent } from './so-list/so-list.component';
import { SoRoutes } from "./sales-order.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GridModule,
    RouterModule.forChild(SoRoutes)
  ],
  declarations: [ SoListComponent ]
})
export class SalesOrderModule { }
