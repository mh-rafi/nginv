import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ng2-cookies';

import { AppLoaderService } from '../../../services/app-loader/app-loader.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, 
    private router: Router, 
    private cookieService: CookieService,
    private loader: AppLoaderService) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    // Dummy setup
    this.loader.open('Signing in');
    setTimeout(() => {
      this.cookieService.set('auth_token', 'dummyAuthToken999999999999');
      this.router.navigate ( [ '/home' ] );
      this.loader.close();
    }, 500);
  }
}
