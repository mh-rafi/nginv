import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Company } from '../../../models/company';
import { CountryService } from "../../../services/country/country.service";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-company-setup',
  templateUrl: './company-setup.component.html',
  styleUrls: ['./company-setup.component.scss']
})
export class CompanySetupComponent implements OnInit {
  company = {};
  form: FormGroup;
  filteredCountries;
  countries;

  constructor(
    private fb: FormBuilder,
    public countryService: CountryService
  ) {}

  ngOnInit() {
    this.countries = this.countryService.countries;
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required])],
      fax: [null],
      website: [null],
      addressLine1: [null],
      addressLine2: [null],
      city: [null],
      state: [null],
      country: [null],
      zip: [null],
      taxNumber: [null],
      logo: [null]
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