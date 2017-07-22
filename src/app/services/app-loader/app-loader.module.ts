import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppLoaderService } from './app-loader.service';
import { AppLoaderComponent } from './app-loader.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [AppLoaderService],
  declarations: [AppLoaderComponent],
  entryComponents: [AppLoaderComponent]
})
export class AppLoaderModule { }
