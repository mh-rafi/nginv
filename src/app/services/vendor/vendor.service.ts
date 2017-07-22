import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class VendorService {
  vendors = [{
    "Id": 1,
    "Name": "Apple",
    "Phone": "+1 (946) 546-2076",
    "Email": "latonyasantiago@billmed.com",
    "Website": "www.example.com",
    "Address": "199 Everett Avenue",
    "City": "Nutrioso",
    "State": "North Dakota",
    "Zip": 2345,
    "Country": "",
    "Discount": 4
  },
  {
    "Id": 2,
    "Name": "Samsung",
    "Phone": "+1 (824) 592-3004",
    "Email": "latonyasantiago@kneedles.com",
    "Website": "www.example.com",
    "Address": "788 Bridgewater Street",
    "City": "Navarre",
    "State": "Virgin Islands",
    "Zip": 2345,
    "Country": "",
    "Discount": 3
  },
  {
    "Id": 3,
    "Name": "GEEKOLA",
    "Phone": "+1 (857) 416-2173",
    "Email": "latonyasantiago@geekola.com",
    "Website": "www.example.com",
    "Address": "338 Franklin Avenue",
    "City": "Babb",
    "State": "New Jersey",
    "Zip": 2345,
    "Country": "",
    "Discount": 6
  },
  {
    "Id": 4,
    "Name": "DOGTOWN",
    "Phone": "+1 (943) 514-3961",
    "Email": "latonyasantiago@dogtown.com",
    "Website": "www.example.com",
    "Address": "286 Maple Avenue",
    "City": "Saticoy",
    "State": "South Dakota",
    "Zip": 2345,
    "Country": "",
    "Discount": 3
  },
  {
    "Id": 5,
    "Name": "BYTREX",
    "Phone": "+1 (924) 461-3838",
    "Email": "latonyasantiago@bytrex.com",
    "Website": "www.example.com",
    "Address": "912 Mill Lane",
    "City": "Hardyville",
    "State": "American Samoa",
    "Zip": 2345,
    "Country": "",
    "Discount": 1
  },
  {
    "Id": 6,
    "Name": "SKYBOLD",
    "Phone": "+1 (830) 401-2197",
    "Email": "latonyasantiago@skybold.com",
    "Website": "www.example.com",
    "Address": "603 Louisa Street",
    "City": "Fairview",
    "State": "Louisiana",
    "Zip": 2345,
    "Country": "",
    "Discount": 1
  },
  {
    "Id": 7,
    "Name": "RECOGNIA",
    "Phone": "+1 (896) 436-2662",
    "Email": "latonyasantiago@recognia.com",
    "Website": "www.example.com",
    "Address": "441 Aviation Road",
    "City": "Gasquet",
    "State": "Hawaii",
    "Zip": 2345,
    "Country": "",
    "Discount": 1
  }]
  constructor() { }

  getAll() {
    return new Observable((observer) => {
      observer.next(this.vendors);
      observer.complete();
    });
  }
  add(vendor) {
    vendor.Id = ++this.vendors[this.vendors.length - 1].Id;
    this.vendors.push(vendor);
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.vendors);
        observer.complete();
      }, 2000);
    });
  }
  update(vendor) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.vendors);
        observer.complete();
      }, 2000);
    });
  }
  getById(id) {
    return new Observable((observer) => {
      let vendor = this.vendors.filter(v => v.Id === id)[0];
      setTimeout(() => {
        observer.next(vendor);
        observer.complete();
      }, 100);
    });
  }
  removeVendor(id) {
    return this.getAll()
  }

}
