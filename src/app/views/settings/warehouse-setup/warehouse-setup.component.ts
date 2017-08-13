import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { CountryService } from "../../../services/country/country.service";

@Component({
  selector: 'app-warehouse-setup',
  templateUrl: './warehouse-setup.component.html',
  styleUrls: ['./warehouse-setup.component.scss']
})
export class WarehouseSetupComponent implements OnInit {
  warehouse = {};
  form: FormGroup;
  filteredCountries;
  countries;

  constructor(
    private fb: FormBuilder,
    public countryService: CountryService
  ) { }

  ngOnInit() {
    this.countries = this.countryService.countries;
    this.form = this.fb.group({
      id: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required])],
      fax: [null],
      website: [null],
      addressLine1: [null],
      addressLine2: [null],
      city: [null],
      state: [null],
      country: [null],
      zip: [null]
    });

    this.filteredCountries = this.form.controls.country.valueChanges
      .startWith(null)
      .map(name => this.filterCountries(name));
  }
  onFormSubmit() {}
  filterCountries(val: string) {
    return val ? this.countries.filter(c => c.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.countries;
  }

}
