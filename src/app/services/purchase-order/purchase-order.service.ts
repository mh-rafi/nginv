import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class PurchaseOrderService {

  constructor() { }
  getAll() {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.orders);
        observer.complete();
      }, 500);
    });
  }
  getById(id) {
    return new Observable((observer) => {
      // console.log(id);
      let order = this.orders.filter(o => o.Id === id)[0];
      // console.log(order)
      // console.log(this.orders.filter(o => o.Id === id))
      setTimeout(() => {
        observer.next(order);
        observer.complete();
      }, 100);
    });
  }
  add(order) {
    let newId = this.orders[this.orders.length - 1].Id;
    order.Id = ++newId;
    this.orders.push(order);
    return this.getAll();
  }
  update(order) {
    return this.getAll();
  }
  removeOrder(id) {
    return this.getAll();
  }
  
  orders = [{
    Id: 1,
    Vendor: {Name: 'Apple'},
    OrderNo: 'PO-042990',
    OrderDate: new Date(),
    InventoryStatus: '',
    Location: '',
    RequestedShipDate: '',
    DueDate: '',
    Total: 4000,
    Paid: 4000,
    Items: [{
      Name: 'iPhone',
      isReceived: true,
      Quantity: 30,
      UnitPrice: 30,
      VendorProductCode: 'fsd',
      Discount: 0
    }, {
      Name: 'iPad',
      isReceived: false,
      Quantity: 20,
      UnitPrice: 30,
      VendorProductCode: 'asd',
      Discount: 10
    }]
  }, {
    Id: 2,
    Vendor: {Name: 'Samsung'},
    OrderNo: 'PO-04292432',
    OrderDate: new Date(),
    InventoryStatus: 1,
    Location: '',
    RequestedShipDate: '',
    DueDate: '',
    Total: 4000,
    Paid: 4000,
    Items: [{
      Name: 'Samsung phone',
      isReceived: true,
      Quantity: 30,
      UnitPrice: 30,
      VendorProductCode: 'fsd',
      Discount: 0
    }, {
      Name: 'LED TV',
      isReceived: false,
      Quantity: 20,
      UnitPrice: 30,
      VendorProductCode: 'asd',
      Discount: 10
    }]
  }]
}