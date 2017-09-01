import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service'

 
@Injectable()
export class AuthGuard implements CanActivate {
    authService:AuthenticationService
    constructor(private router: Router,auth:AuthenticationService) {
       this.authService = auth;
    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.checkLogin()) {//have to implement actual login service
            // logged in so return true
            console.log('login true');
            return true;
        }
 
        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}