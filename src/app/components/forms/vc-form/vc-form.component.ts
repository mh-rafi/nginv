import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'vc-form',
  templateUrl: './vc-form.component.html',
  styleUrls: ['./vc-form.component.scss']
})
export class VcFormComponent implements OnInit {
  @Input() title: String;
  @Input() subtitle: String;
  @Input() buttonText: String;

  @Input() targetType: String; // vendor/customer
  @Input() targetObject = {
    Name: '',
    Email: '',
    Phone: '',
    Website: '',
    City: '',
    State: '',
    Address: '',
    Discount: ''
  };
  
  @Output() onSubmit = new EventEmitter();
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required])],
      website: [null],
      address: [null],
      city: [null],
      state: [null],
      discount: [null]
    });
  }
  onFormSubmit() {
    this.onSubmit.emit(this.targetObject);
  }

}
