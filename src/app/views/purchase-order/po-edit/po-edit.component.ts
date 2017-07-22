import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { PurchaseOrderService } from '../../../services/purchase-order/purchase-order.service';
import { VendorService } from '../../../services/vendor/vendor.service';

@Component({
  selector: 'app-po-edit',
  templateUrl: './po-edit.component.html',
  styleUrls: ['./po-edit.component.scss']
})
export class PoEditComponent implements OnInit {
  poId;
  order = {
    Items: []
  };
  vendors = [];
  constructor(private route: ActivatedRoute,
  private loader: AppLoaderService, 
  private snakBar: MdSnackBar,
  private poService: PurchaseOrderService,
  private vendorService: VendorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.poId = +params['id'];
      this.poService.getById(this.poId).subscribe((order: any) => {
        this.order = order;
        console.log('get order',this.order);
      });
    });
  }
  update(order) {
    this.loader.open('Updating vendor!');
    this.poService.update(order).subscribe(res => {
      this.loader.close();
      this.snakBar.open('Order updated!', 'Close', {duration: 3000});
    })
  }
}