import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { GridModule } from '@progress/kendo-angular-grid';

import { ProductListComponent } from './product-list/product-list.component';
import { InventoryRoutes } from './inventory.routing';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    GridModule,

    RouterModule.forChild(InventoryRoutes),
  ],
  declarations: [ProductListComponent, ProductAddComponent]
})
export class InventoryModule { }
