import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginForm : FormGroup;
    authenticationService : AuthenticationService;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        fb: FormBuilder,
        authenticationService: AuthenticationService) { 
             this.loginForm = fb.group({                  
                  'userName' : [null, Validators.required],                  
                  'passWord': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
                  'rememberMe' : false
                })
        this.authenticationService = authenticationService;
        }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login(value: any) {
        this.loading = true;
        this.authenticationService.login(value)
            .subscribe(
                data => {
                    // login successful so redirect to return url
                    this.router.navigateByUrl(this.returnUrl);
                },
                error => {
                    // login failed so display error
                    //this.alertService.error(error);
                    this.loading = false;
                });
    }   
}