import { Component, OnInit } from '@angular/core';

import { CustomerService } from "../../../services/customer/customer.service";
import { AppConfirmService } from "../../../services/app-confirm/app-confirm.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers$;
  constructor(private customerService: CustomerService, private confirmService: AppConfirmService) { }

  ngOnInit() {
    this.customers$ = this.customerService.getAll();
  }
  remove(id) {
    
  }
}
