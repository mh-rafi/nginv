import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { VendorService } from '../../../services/vendor/vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {
  vendorId;
  vendor = {};
  constructor(private route: ActivatedRoute,
  private loader: AppLoaderService, 
  private snakBar: MdSnackBar, 
  private vendorService: VendorService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vendorId = +params['id'];
      this.vendorService.getById(this.vendorId).subscribe(vendor => {
        this.vendor = vendor;
      });
    });
  }

  update(vendor) {
    this.loader.open('Updating Vendor');
    this.vendorService.update(vendor).subscribe(res => {
      this.loader.close();
      this.snakBar.open('Vendor Updated!', 'Close', {duration: 3000});
    });
  }
}