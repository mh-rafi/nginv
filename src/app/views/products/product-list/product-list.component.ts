import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { AppConfirmService } from "../../../services/app-confirm/app-confirm.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private productService: ProductService, private confirmService: AppConfirmService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((products: any) => {
      this.products = products;
    })
  }
  remove(id) {
    
  }

}
