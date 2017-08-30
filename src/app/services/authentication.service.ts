import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from './http-client.services';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Rx";
import {EndPointService} from "./endpoint.service"


@Injectable()
export class AuthenticationService {
    authUser:any;
    endPoint:EndPointService;
    constructor(private http:HttpClient, private localStorageService: LocalStorageService,private router: Router,endPoint:EndPointService) {
     
    }
 
    login(email: string, password: string) {
            let param:any;
            param.email = email;
            param.password = password;
        return this.http.post(this.endPoint.getUrl('login'), $.param(param))
            .map(res => {
                // If request fails, throw an Error that will be caught
                if(res.status < 200 || res.status >= 300) {
                  throw new Error('This request has failed ' + res.status);
                }                 
                else {
                    // If everything went fine, return the response
                  return res.json();
                }
              }).catch(err => Observable.throw(err.json()));
    }

    getLoggedInUser() {
       if(this.getToken() != null){
       
                   console.log("this executes second");
                   console.log(this.http);
                   var http$ = this.http.post(his.endPoint.getUrl('getLoggedInUser'), $.param({}))
                    .map(res => {
                     
                        // If request fails, throw an Error that will be caught
                        if(res.status < 200 || res.status >= 300) {
                         
                          throw new Error('This request has failed ' + res.status);
                        }                            
                        else {                        
                            // If everything went fine, return the response
                          console.log(res.json());
                        }
                      }); 

                  http$.subscribe(value => console.log(value));
             }else{
               this.ClearCredentials();
               this.router.navigateByUrl('login');
             } 
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    setAuthUser(data) {
        this.authUser = data;
    }

    getAuthUser = function(){
            return this.authUser;    
    }

    ClearCredentials = function () {   
            
            this.localStorageService.remove('access_token');
            this.localStorageService.remove('expires_in');
    };

   getToken = function(){
            var token = this.localStorageService.get('access_token');
            var expires_in = this.localStorageService.get('expires_in');
            
            if( ! token || !expires_in){                
                    return null;                
            }
            
            if(Date.now() > parseInt(expires_in)){
                this.ClearCredentials();
                return null;        
            }else{
                return token;
            }
        }
        
    checkLogin = function(){
            
            var token = this.getToken();
            if(token != null){
                 return true;
            }else{
               return false;
            }
        }
}