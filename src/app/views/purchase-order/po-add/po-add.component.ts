import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { PurchaseOrderService } from '../../../services/purchase-order/purchase-order.service';
@Component({
  selector: 'app-po-add',
  templateUrl: './po-add.component.html',
  styleUrls: ['./po-add.component.scss']
})
export class PoAddComponent implements OnInit {
  order = {Items: []};
  vendors = [];
  constructor(private loader: AppLoaderService, 
  private snakBar: MdSnackBar,
  private router: Router,
  private poService: PurchaseOrderService) { }

  ngOnInit() {
    
  }
  add(order) {
    this.loader.open('Adding new order')
    this.poService.add(order).subscribe((orders) => {
      this.loader.close();
      this.snakBar.open('Order Added!', 'Close', {duration: 3000});
      this.router.navigate ( [ '/purchase-order/list' ] );
    });
    console.log(order)
  }
}
