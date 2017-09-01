import { Injectable } from '@angular/core';


class AppSettings {
   public static API_ENDPOINT='http://atlasapi.lan/api/';
   public static API_VERSION='v1';
}


@Injectable()
export class EndPointService {
    authUser:any;
    constructor() {
     
    }
 
    /**
     * Use to get the final url to consume the resource.
     *  @param 
     * @return {url}
     */
    getUrl = function( key ){
      var domainUrl = AppSettings.API_ENDPOINT;
      var endPoint = {
        "login": "authenticate2"
      };  
      return domainUrl + endPoint[key];
    }



    /**
     * Build params for request
     * @param {Object} obj
     * @return {URLSearchParams}
     */
    buildParams = function( obj:Object ){
     let myParams = new URLSearchParams(); 
      for(let key in obj){        
        myParams.set(key, obj[key]);
      }

      return myParams;
    }
}