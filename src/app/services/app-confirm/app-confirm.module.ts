import { AppConfirmService } from './app-confirm.service';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComfirmComponent } from './app-confirm.component';

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [AppComfirmComponent],
  declarations: [AppComfirmComponent],
  providers: [AppConfirmService],
  entryComponents: [AppComfirmComponent]
})
export class AppConfirmModule { }