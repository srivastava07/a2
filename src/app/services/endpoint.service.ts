import { Injectable } from '@angular/core';


class AppSettings {
   public static API_ENDPOINT='http://127.0.0.1:6666/api';
   public static API_VERSION='v1';
}


@Injectable()
export class EndPointService {
    authUser:any;
    constructor() {
     
    }
 
    /**
     * use to get the final url to consume the resource.
     *  @param 
     * @return {url}
     */
    getUrl = function( key ){
      var domainUrl = AppSettings.API_ENDPOINT+"/"+AppSettings.API_VERSION+'/';
      var endPoint = {
        "login": "/login"
      };  
      return domainUrl + endPoint[key];
    }
}