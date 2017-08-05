import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { GridModule } from '@progress/kendo-angular-grid';
import { SharedFormsModule } from "../../components/forms/shared-forms.module";


import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorsRoutes } from './vendors.routing';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    GridModule,
    SharedFormsModule,
    RouterModule.forChild(VendorsRoutes),
  ],
  declarations: [VendorListComponent, VendorEditComponent, VendorFormComponent, VendorAddComponent]
})
export class VendorsModule { }
