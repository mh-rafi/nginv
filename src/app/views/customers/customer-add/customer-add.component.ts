import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { CustomerService } from '../../../services/customer/customer.service';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  customer = {};
  constructor(private customerServece: CustomerService, 
  private loader: AppLoaderService, 
  private snakBar: MdSnackBar) { }

  ngOnInit() {
  }
  add(customer) {
    this.loader.open('Adding...');
    this.customerServece.add(customer).subscribe(res => {
      this.loader.close();
      this.snakBar.open('Vendor Added!', 'Close', {duration: 3000});
    });
  }
}
