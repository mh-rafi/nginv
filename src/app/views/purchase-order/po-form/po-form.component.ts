import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { VendorService } from '../../../services/vendor/vendor.service';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-po-form',
  templateUrl: './po-form.component.html',
  styleUrls: ['./po-form.component.scss']
})
export class PoFormComponent implements OnInit {
  @Input() title: String;
  @Input() subtitle: String;
  @Input() buttonText: String;
  @Input() order = {
    Vendor: '',
    OrderNo: '',
    OrderDate: '',
    InventoryStatus: '',
    Location: '',
    RequestedShipDate: '',
    DueDate: '',
    Total: 0,
    Paid: 0,
    Items: []
  }
  @Output() onSubmit = new EventEmitter();
  public form: FormGroup;
  public itemForm: FormGroup;
  vendors = [];
  products = [];
  // vendorCtrl: FormControl;
  filteredVendors: any = [];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  constructor(private fb: FormBuilder,
  private vendorService: VendorService,
  private productService: ProductService) {

    this.form = this.fb.group({
      Vendor: [null, Validators.compose([Validators.required])],
      OrderNo: [null],
      OrderDate: [null],
      InventoryStatus: [null],
      Location: [null],
      RequestedShipDate: [null],
      DueDate: [null],
      Total: [null],
      Paid: [null]
    });

    vendorService.getAll().subscribe((vendors: any[]) => {
      this.vendors = vendors;
      console.log('get', this.filteredVendors);
      // console.log('get', this.order);
    });
    productService.getAll()
    .flatMap((value:any) => value)
    .map((value: any) => {
      // console.log(value);
      return value;
    }).subscribe((productName: any[]) => {
      this.products.push(productName);
      // console.log(productName);
    });
    // this.vendorCtrl = new FormControl();
    this.filteredVendors = this.form.controls.Vendor.valueChanges
      .startWith(null)
      .map(value => this.displayFn(value))
      .map(name => this.filterVendors(name));
  }

  ngOnInit() {
    
  }
  onFormSubmit() {
    this.onSubmit.emit(this.order);
  }
  displayFn(value: any): String {
    return value && typeof value === 'object' ? value.Name : value;
  }
  filterVendors(val: String) {
    return val ? this.vendors.filter(v => v.Name.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.vendors;
  }

  private editedRowIndex: number;
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
  }
  public onStateChange(state: State) {
    this.gridState = state;

        // this.editService.read();
  }
  // Open Item edit Form
  editItemHandler({sender, rowIndex, dataItem}) {
    this.closeEditor(sender);
    this.itemForm = new FormGroup({
      isReceived: new FormControl(),
      Name: new FormControl(),
      Quantity: new FormControl(),
      UnitPrice: new FormControl(),
      Discount: new FormControl(),
      Subtotal: new FormControl({disabled: true})
    });
    this.editedRowIndex = rowIndex;
    sender.editRow(rowIndex, this.itemForm);
  }
  // Save item
  saveItemHandler({sender, rowIndex, formGroup, isNew}) {
    sender.closeRow(rowIndex);
    if(!isNew)
      return;
    this.order.Items.push(formGroup.value);
    // console.log(formGroup.value, isNew)
  }
  // Open item add Form
  addItemHandler({sender}) {
    this.closeEditor(sender);
    this.itemForm = new FormGroup({
      isReceived: new FormControl(),
      Name: new FormControl(),
      Quantity: new FormControl(),
      UnitPrice: new FormControl(),
      Discount: new FormControl(),
      Subtotal: new FormControl({disabled: true})
    });
    sender.addRow(this.itemForm);
  }
  removeItemHandler({dataItem}) {
    this.order.Items.splice(this.order.Items.indexOf(dataItem), 1);
    // console.log(this.order.Items.indexOf(dataItem))
  }
  cancelItemHandler({sender, rowIndex}) {
    this.closeEditor(sender, rowIndex);
  }
  handleItemChange(data) {
    // console.log(data);
    let selected = this.products.find(p => p.Name === data);
    // console.log(selected);
    this.itemForm.controls['Quantity'].setValue(1);
    this.itemForm.controls['Discount'].setValue(0);
    this.itemForm.controls['UnitPrice'].setValue(selected.Price);
  }
  calcItemTotal() {
    let total = 0;
    this.order.Items.forEach((item:any) => {
      total += (item.UnitPrice * item.Quantity * (1 - (item.Discount || 0)/100))
    });
    return total;
  }
}
