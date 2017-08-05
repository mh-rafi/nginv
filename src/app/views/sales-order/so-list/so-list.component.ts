import { Component, OnInit } from '@angular/core';
import { SalesOrderService } from '../../../services/sales-order/sales-order.service';
import { AppConfirmService } from "../../../services/app-confirm/app-confirm.service";

@Component({
  selector: 'app-so-list',
  templateUrl: './so-list.component.html',
  styleUrls: ['./so-list.component.scss']
})
export class SoListComponent implements OnInit {
  orders = [];
  constructor(private soService: SalesOrderService, private confirmService: AppConfirmService) { }

  ngOnInit() {
    this.soService.getAll().subscribe((orders: any[]) => {
      this.orders = orders;
      console.log('list', orders)
    });
  }

}
