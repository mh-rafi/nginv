import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import CONST from '../../helpers/constants';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthService implements CanActivate {
  public authToken;
  constructor(private router: Router,
  private cookieService: CookieService, 
  private http: Http) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!!this.cookieService.get('auth_token')) {
      return true
    }
    return false;
  }
  checkAuthentication() {
    let token = this.cookieService.get('auth_token');
    this.authToken = token;
    // this.http.get(`${CONST.HOST}/api/checkAuth/?token=${token}`)
    //   .subscribe(data => {
    //     // Nothing to do
    //     // console.log(data.json())
    //   }, err => {
    //     // this.cookieService.delete('auth_token');
    //     this.router.navigate(['/session/signin']);
    //   });
    if(!token) {
      this.router.navigate(['/session/signin'])
    }
  }
  signout() {
    this.cookieService.delete('auth_token');
    this.router.navigate(['/session/signin']);
  }
}
