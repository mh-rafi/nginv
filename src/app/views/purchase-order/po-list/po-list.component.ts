import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../../../services/purchase-order/purchase-order.service';
import { AppConfirmService } from "../../../services/app-confirm/app-confirm.service";

@Component({
  selector: 'app-po-list',
  templateUrl: './po-list.component.html',
  styleUrls: ['./po-list.component.scss']
})
export class PoListComponent implements OnInit {
  orders = [];
  constructor(private poService: PurchaseOrderService, private confirmService: AppConfirmService) { }

  ngOnInit() {
    this.poService.getAll().subscribe((orders: any[]) => {
      this.orders = orders;
      console.log('list', orders)
    });
  }
  remove(id) {
    this.confirmService.confirm('Confirm delete!', 'Are you sure?').subscribe(res => {
      if(!res)
        return;
      this.poService.removeOrder(id).subscribe((orders: any) => {
        this.orders = orders;
      });
    });
  }

}
