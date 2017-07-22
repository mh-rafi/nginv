import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CookieService } from 'ng2-cookies';
import { AppLoaderModule } from './services/app-loader/app-loader.module';
import { AppConfirmModule } from './services/app-confirm/app-confirm.module';

import { AuthService } from './services/auth/auth.service';
import { VendorService } from './services/vendor/vendor.service';
import { PurchaseOrderService } from './services/purchase-order/purchase-order.service';
import { ProductService } from './services/product/product.service';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    MdNativeDateModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    MaterialModule,
    FlexLayoutModule,
    AppLoaderModule,
    AppConfirmModule
  ],
  providers: [
    AuthService, 
    CookieService, 
    VendorService, 
    PurchaseOrderService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
