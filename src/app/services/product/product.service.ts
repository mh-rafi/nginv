import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ProductService {

  constructor() { }
  getAll() {
    return new Observable((observer) => {
      observer.next(this.products);
      observer.complete();
    });
  }
  add(product) {
    product.Id = ++this.products[this.products.length - 1].Id;
    this.products.push(product);
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.products);
        observer.complete();
      }, 2000);
    });
  }
  update(product) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.products);
        observer.complete();
      }, 2000);
    });
  }
  getById(id) {
    return new Observable((observer) => {
      let product = this.products.filter(p => p.Id === id)[0];
      setTimeout(() => {
        observer.next(product);
        observer.complete();
      }, 100);
    });
  }
  remove(id) {
    return this.getAll()
  }
  products = [{
    Id: 1,
    Name: 'Samsung phone',
    Code: '',
    Type: 'Stocked Product',
    Category: 'Default',
    Quantity: 3000,
    Cost: 500,
    Price: 600
  }, {
    Id: 1,
    Name: 'LED TV',
    Code: '',
    Type: 'Stocked Product',
    Category: 'Default',
    Quantity: 100,
    Cost: 1500,
    Price: 1800
  }, {
    Id: 2,
    Name: 'iPhone',
    Code: '',
    Type: 'Stocked Product',
    Category: 'Default',
    Quantity: 4000,
    Cost: 1200,
    Price: 1400
  }, {
    Id: 3,
    Name: 'iPad',
    Code: '',
    Type: 'Stocked Product',
    Category: 'Default',
    Quantity: 4000,
    Cost: 1800,
    Price: 2000
  }]
}