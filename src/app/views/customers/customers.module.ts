import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MdIconModule,
  MdButtonModule
} from '@angular/material';
import { SharedFormsModule } from "../../components/forms/shared-forms.module";
import { GridModule } from '@progress/kendo-angular-grid';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutes } from "./customers.routing";
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    GridModule,
    SharedFormsModule,
    RouterModule.forChild(CustomersRoutes)
  ],
  declarations: [CustomerListComponent, CustomerAddComponent, CustomerEditComponent]
})
export class CustomersModule { }
