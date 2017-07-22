import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { GridModule } from '@progress/kendo-angular-grid';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutes } from './products.routing';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    GridModule,

    RouterModule.forChild(ProductsRoutes),
  ],
  declarations: [ProductListComponent]
})
export class ProductsModule { }
