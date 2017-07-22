import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../services/vendor/vendor.service';
import { AppConfirmService } from "../../../services/app-confirm/app-confirm.service";
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  vendors;

  constructor(private vendorService: VendorService, private confirmService: AppConfirmService) { }

  ngOnInit() {
    this.vendorService.getAll().subscribe(vendors => {
      this.vendors = vendors;
    })
  }
  edit(vendor) {
    console.log(vendor);
  }
  remove(id) {
    this.confirmService.confirm('Confirm delete!', 'Are you sure?').subscribe(res => {
      if(!res)
        return;
      this.vendorService.removeVendor(id).subscribe(vendors => {
        this.vendors = vendors;
      });
    });
  }
}
