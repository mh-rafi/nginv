import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customerId: number;
  customer = {};
  constructor(private route: ActivatedRoute,
  private loader: AppLoaderService, 
  private snakBar: MdSnackBar, 
  private customerServece: CustomerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = +params['id'];
      console.log('from customer edit', this.customerId);
      this.customerServece.getById(this.customerId).subscribe(customer => {
        this.customer = customer;
      });
    });
  }
  update(customer) {
    this.loader.open('Updating Vendor');
    this.customerServece.update(customer).subscribe(res => {
      this.loader.close();
      this.snakBar.open('Vendor Updated!', 'Close', {duration: 3000});
    });
  }
}
