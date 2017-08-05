import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { PoRoutes } from './purchase-order.routing';
import { PoListComponent } from './po-list/po-list.component';
import { PoFormComponent } from './po-form/po-form.component';
import { PoEditComponent } from './po-edit/po-edit.component';
import { PoAddComponent } from './po-add/po-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    GridModule,
    DropDownsModule,
    RouterModule.forChild(PoRoutes)
  ],
  declarations: [PoListComponent, PoFormComponent, PoEditComponent, PoAddComponent]
})
export class PurchaseOrderModule { }