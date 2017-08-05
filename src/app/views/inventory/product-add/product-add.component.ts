import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { ProductService } from "../../../services/product/product.service";
import { MdSnackBar } from '@angular/material';
import { AppLoaderService } from '../../../services/app-loader/app-loader.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  newProduct = {
    Name: '',
    Type: '',
    Category: '',
    Cost: 0,
    SalesPrice: 0,
    Markup: 0
  }
  productForm: FormGroup;
  constructor(private fb: FormBuilder, 
  private productService: ProductService, 
  private loader: AppLoaderService, 
  private snakBar: MdSnackBar) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      type: [null],
      category: [null],
      cost: [null, Validators.compose([Validators.required])],
      salesPrice: [null],
      markup: [null]
    });
  }
  add() {}
}
