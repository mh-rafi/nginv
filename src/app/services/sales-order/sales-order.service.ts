import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SalesOrderService {
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
    Customer: { Name: 'Apple' },
    OrderNo: 'PO-042990',
    OrderDate: new Date(),
    PaymentStatus: '',
    InventoryStatus: '',
    Location: '',
    RequestedShipDate: '',
    ShippedDate: new Date(),
    DueDate: '',
    Total: 4000,
    Paid: 4000,
    Items: [{
      Name: 'iPhone',
      isFullfilled: true,
      Quantity: 30,
      UnitPrice: 30,
      Discount: 0
    }, {
      Name: 'iPad',
      isFullfilled: false,
      Quantity: 20,
      UnitPrice: 30,
      Discount: 10
    }]
  }]
}