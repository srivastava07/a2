import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class HttpClient {

  constructor(private http: Http,private localStorageService: LocalStorageService,) {}

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
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
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