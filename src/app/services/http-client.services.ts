import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import {EndPointService} from "./endpoint.service"

@Injectable()
export class HttpClient {
  endPoint:EndPointService;
  constructor(private http: Http,private localStorageService: LocalStorageService,endPoint:EndPointService) {
    this.endPoint = endPoint;
  }

  createAuthorizationHeader(headers: Headers) {
   // headers.append('Authorization', 'Basic ' +
     // btoa('username:password')); ''];
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
     //headers.append('Authorization', 'Bearer Hello');
     /*var token = this.getToken();

     if(token != null){
       headers.append('Authorization', 'Bearer '+token);
     }
      console.log(headers);*/
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {headers: headers});
  }

  post(url, data) {
    let headers = new Headers();    
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, new RequestOptions({ headers: headers, params:  this.endPoint.buildParams(data) }));
  }

   getToken = function(){
            var token = this.localStorageService.get('access_token');
            var expires_in = this.localStorageService.get('expires_in');
            
            if( ! token || !expires_in){                
                    return null;                
            }
            
            if(Date.now() > parseInt(expires_in)){                
                return null;        
            }else{
                return token;
            }
        }
}