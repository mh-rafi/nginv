import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { VendorService } from '../../../services/vendor/vendor.service';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {
  vendor = {}
  constructor(private vendorService: VendorService, 
  private loader: AppLoaderService, 
  private snakBar: MdSnackBar) { }

  ngOnInit() {
  }
  add(vendor) {
    this.loader.open('Adding...');
    this.vendorService.add(vendor).subscribe(res => {
      this.loader.close();
      this.snakBar.open('Vendor Added!', 'Close', {duration: 3000});
    });
  }
}
